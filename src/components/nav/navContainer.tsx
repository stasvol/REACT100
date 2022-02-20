import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Nav from './nav';
import { siteBarActionCreator } from '../../redux/sitebar_reducer';
import { RootReducersType } from '../../redux/reduxStore';

export type DispatchType = {
  siteBarActionCreator: (userId: number) => void;
};

const mapStateToProps = (state: RootReducersType) => {
  return {
    state: state.siteBar,
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

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
