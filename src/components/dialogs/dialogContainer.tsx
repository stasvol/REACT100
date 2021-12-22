import React  from 'react';
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";

import {withAuthRedirect} from "../../hock/withAuthRedirect";
import { dialogAction,} from '../../redux/dialog_reducer';
import {rootReducersType} from "../../redux/reduxStore";
import Dialog from "./dialog";

const mapStateToProps = (state :rootReducersType) => {
    return {
        state: state.dialogPage,
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addMessage: (newMessageText:string) => {
            dispatch(dialogAction.addMessage(newMessageText))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialog)
