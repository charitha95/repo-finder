import React from 'react';
import notFoundImage from '../../../../assets/imgs/not_found.png';
import CustomeState from '../CustomeState';

export default function NotFound() {
  return <CustomeState
    img={notFoundImage}
    title='Sorry!'
    description={`couldn't find your repositories`} />
}