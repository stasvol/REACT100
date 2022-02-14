// import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Nav from './nav';
import { siteBarActionCreator, SiteBarNavType } from '../../redux/sitebar_reducer';

// export type DispatchType = {
//   siteBarActionCreator: (userId: number) => void;
// };

const mapStateToProps = (state: {
  siteBar: { siteBarNav: SiteBarNavType };
}): { siteBar: { siteBarNav: SiteBarNavType }; siteBarNav: SiteBarNavType } => {
  return {
    siteBar: state.siteBar,
    siteBarNav: state.siteBar.siteBarNav,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeClick: (userId: number) => {
      dispatch(siteBarActionCreator(userId));
    },
  };
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
