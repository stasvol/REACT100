// import React from 'react';
// import Header, {dispatchType, mapStateType} from "./Header";
// import { loginOut} from "../../redux/auth_reducer";
// import {connect} from "react-redux";
// import {rootReducersType} from "../../redux/reduxStore";
//
// // export type mapStateType={
// //     isAuth: boolean,
// //     login: string
// // }
// // export type dispatchType={
// //     loginOut:()=>void
// // }
//
//
// class HeaderContainer extends React.Component<mapStateType & dispatchType> {
//
//     // componentDidMount(props) {
//     //      this.props.authThunkCreator (this.props.id, this.props.email, this.props.login,this.props.isAuth)
//     //     // userApi.loginUser().then(data => {
//     //     //
//     //     //           if (data.resultCode === 0){
//     //     //               let {id, email, login} = data.data
//     //     //            this.props.setAuthUserData(id, email, login);
//     //     //        }
//     //     // });
//     //
//     // }
//
//     render() {
//         return (
//
//             <Header {...this.props} />
//         )
//     }
// }
// let mapStateToProps = (state:rootReducersType) => ({
//     // auth: state.auth,
//     isAuth: state.auth.isAuth,
//     login: state.auth.login
// });
//
// export default connect <mapStateType , dispatchType, {}, rootReducersType>( mapStateToProps,{loginOut}) (HeaderContainer);