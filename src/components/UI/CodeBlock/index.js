import React from "react";
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

CodeBlock.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string
}

/**
 * Function represents codeblock component, uses on readme markdown
 * @param {Object} props Component Props 
 */
export default function CodeBlock({ language, value }) {

  return <SyntaxHighlighter language={language}>
    {value}
  </SyntaxHighlighter>
}
