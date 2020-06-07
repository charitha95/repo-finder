import React from 'react';
import fetchingImage from '../../../../assets/imgs/fetching.png';
import CustomeState from '../CustomeState';

/**
 * Function represents a common component which returns fetching component
 */
export default function Fetching() {

  return <CustomeState
    img={fetchingImage}
    title='Fetching!'
    description='Searching for your repositories' />
}