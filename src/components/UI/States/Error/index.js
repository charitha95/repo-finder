import React from 'react';
import errorImage from '../../../../assets/imgs/error.png';
import CustomeState from '../CustomeState';

/**
 * Function represents a common component which returns error component
 */
export default function Error() {

  return <CustomeState
    img={errorImage}
    title='Oopz!'
    description='an error occured, try something else' />
}