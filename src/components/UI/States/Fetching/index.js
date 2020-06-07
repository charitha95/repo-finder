import React from 'react';
import fetchingImage from '../../../../assets/imgs/fetching.png';
import CustomeState from '../CustomeState';

export default function Fetching() {

  return <CustomeState
    img={fetchingImage}
    title='Fetching!'
    description='Searching for your repositories' />
}