import React from 'react';

import { SiteBarNavType } from '../../../redux/sitebar_reducer';

import classes from './siteBar.module.css';

const SiteBar: React.FC<SiteBarNavType> = ({ name, img }): React.ReactElement => {
  const changeClick = () => <div>`HELLO FRIEND ${name}`</div>;

  return (
    <div className={classes.block}>
      <img alt="" className={classes.imgAvat} onClick={changeClick} role="presentation" src={img} />
      <span className={classes.text}>{name}</span>
    </div>
  );
};

export default SiteBar;
