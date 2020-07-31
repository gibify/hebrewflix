import React from 'react';

import Image from '../../assets/PageError.svg';
import Error from '../../components/Error';

function PageError() {
  return (
    <Error>
      <img src={Image} alt="Error" />
    </Error>
  );
}

export default PageError;
