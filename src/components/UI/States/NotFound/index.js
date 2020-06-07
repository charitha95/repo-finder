import React from 'react';
import notFoundImage from '../../../../assets/imgs/not_found.png';
import CustomeState from '../CustomeState';

/**
 * Function represents a common component which returns not found component
 */
export default function NotFound() {

  return <CustomeState
    img={notFoundImage}
    title='Sorry!'
    description={`couldn't find your repositories`} />
}