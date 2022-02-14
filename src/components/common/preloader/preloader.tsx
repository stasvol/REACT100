import React from 'react';

import preloader from '../../../photo/images/760.svg';

const Preloader: React.FC = () => {
  return (
    <div>
      <img alt="preloader" src={preloader} />
    </div>
  );
};

export default Preloader;
