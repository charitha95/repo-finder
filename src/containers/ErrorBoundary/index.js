import React from 'react';
import { Button } from '../../components/UI';

class ErrorBoundary extends React.Component {

  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // TODO:: handle errors with a custom error logger
  }

  retry = () => {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return <>
        <h5 style={{ textAlign: "center" }}>Something went wrong.</h5>
        <Button isPrimary={false} clickHandler={this.retry}>Retry</Button>
      </>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;