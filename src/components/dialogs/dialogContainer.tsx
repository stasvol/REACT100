import React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';

import { withAuthRedirect } from '../../hock/withAuthRedirect';
import { dialogAction } from '../../redux/dialog_reducer';

import Dialogs, { PropsDialogType } from './dialog';

const mapStateToProps = (state: { dialogPage: PropsDialogType }) => state.dialogPage;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addMessage: (newMessageText: string) => {
      dispatch(dialogAction.addMessage(newMessageText));
    },
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);
