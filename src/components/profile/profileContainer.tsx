import React, {useCallback, useEffect} from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom"
import {connect} from "react-redux";
import {compose} from "redux";

import {withAuthRedirect} from "../../hock/withAuthRedirect";
import {rootReducersType} from "../../redux/reduxStore";
import {
    getStatus, profileThunkCreator, savePhoto,
    setUsersProfile, updateStatus, editProfile, profileType, PostDataType
} from "../../redux/prof_reducer";
import Profile from "./profile";

type mapStatePropsTYpe = ReturnType<typeof mapStateToProps>

type dispatchPropsTYpe = {
    profile: profileType,
    setUsersProfile: (profile: profileType) => void,
    getUsers: (userId: number | string | undefined) => void,
    getStatus: (userId: number | string | undefined) => void,
    updateStatus: (status: string) => void,
    savePhoto: (file: File) => void,
    editProfile: (profile: profileType) => Promise<profileType>,
    newText: string,
    PostData: Array<PostDataType>
}

type RouteParams = {
    userId: string | undefined
}

// type prevPropsType=mapStatePropsTYpe & dispatchPropsTYpe & RouteComponentProps<RouteParams>

const ProfileContainer: React.FC<mapStatePropsTYpe & dispatchPropsTYpe & RouteComponentProps<RouteParams>> = ({...props}) => {

    const userUpdateProfile = useCallback( () => {

        let userId: number | null | string | undefined = props.match.params.userId;

        if (!userId) {
            userId = props.authorisedUserId

            if (!userId) {
                userId = +props.history.push('/login')
            }
        }
        if (userId) {
            props.getUsers(userId)
            props.getStatus(userId);
        } else {
            throw new Error('ID should exists')
            // console.error('ID should exists')
        }
    },[props.getUsers,props.getStatus,props.authorisedUserId]);

    useEffect(() => userUpdateProfile(), [props.getUsers,props.getStatus,props.authorisedUserId]);

    useEffect(() => {
        if (props.match.params.userId) userUpdateProfile()
    }, [props.match.params.userId]);

    return (
        <div>
            <Profile  {...props} profile={props.profile}
                      status={props.status} updateStatus={props.updateStatus}
                      isOwner={!props.match.params.userId}
                      savePhoto={props.savePhoto}/>

        </div>
    )
}

const mapStateToProps = (state: rootReducersType) => ({
    state: state.profPage,
    profile: state.profPage.profile,
    status: state.profPage.status,
    authorisedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsersProfile,
        getUsers: profileThunkCreator, getStatus, updateStatus, savePhoto, editProfile
    }),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)