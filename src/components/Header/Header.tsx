import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import photo from "../../Photo/Images/kot.png";
import {Avatar, Button, Col, Image, Layout, Menu, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {isAuthSelector, loginSelector} from '../../redux/auth-selector';
import {loginOut} from "../../redux/auth_reducer";
import {rootReducersType} from "../../redux/reduxStore";
// import {Header} from "antd/es/layout/layout";

// export type headerPropsType={
//     isAuth:boolean,
//     login:string,
//     loginOut:()=> void
// }

//  export type mapStateType={
//     isAuth: boolean,
//     login: string|null
// }
// export type dispatchType={
//     loginOut:()=>void
// }

const MyHeader:React.FC = (props) =>{
    const { Header } = Layout;
    // const isAuth = useSelector(isAuthSelector)
    const isAuth = useSelector((state:rootReducersType) => state.auth.isAuth)
    const login = useSelector(loginSelector)
    const dispatch = useDispatch()

    const logOutUser = ()=> {
        dispatch(loginOut())
    }
    return(
        <Header className="header">
            <div className="logo" />
            <Row>
                <Col span={20}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><NavLink to={'/Profile'} activeClassName={classes.active}>MY PROFILE</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to={'/User'} activeClassName={classes.active}>DEVELOPERS</NavLink></Menu.Item>
                        <Menu.Item key="3"><NavLink to={'/chat'} activeClassName={classes.active}>CHAT</NavLink></Menu.Item>
                    </Menu>
                </Col>

                    {/*<Avatar src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}/>*/}
                    { isAuth
                        ?  <><Col span={1}>
                            <Avatar src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}/>
                            </Col>
                            <Col span={1} style={{color:"white"}}>
                                {login}
                            </Col>
                            <Col span={1}>
                                <Button onClick={logOutUser}>Log out</Button>
                            </Col>
                          </>
                         :  <Col span={1}>
                            <Button><NavLink to={'/login'}>LOGIN</NavLink></Button>
                            </Col>
                    }

            </Row>
        </Header>
        // <header className={classes.header}>
        //     <img src={'https://img2.pngio.com/logo-png-images-download-150000-logo-png-resources-with-logo-download-png-360_360.png'} alt={'image'}/>
        //     <div className={classes.log}>
        //         { props.isAuth
        //             ?
        //             <div>{props.login}    <button onClick={props.loginOut}>Log out</button> </div>
        //             :  <NavLink to={'/login'}>LOGIN</NavLink>
        //         }
        //
        //     </div>
        // </header>
    )
}

export default MyHeader