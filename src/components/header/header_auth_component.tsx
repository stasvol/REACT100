import React from 'react';
import { Avatar, Button, Col, Image } from 'antd';

import { useMyHeader } from '../../hook/useMyHeader';

import classes from './header.module.css';

const HeaderAuthComponent = () => {
  const { login, logOutUser } = useMyHeader();
  return (
    <>
      <Col span={1}>
        <Avatar
          src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        />
      </Col>
      <Col className={classes.span} span={1}>
        {login}
      </Col>
      <Col span={1}>
        <Button className={classes.button} onClick={logOutUser}>
          Log out
        </Button>
      </Col>
    </>
    //   <Col>
    //     {isAuth
    //       ? (
    //         <>
    //           <Col span={1}>
    //             <Avatar src={
    //               <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    //       }
    //             />
    //           </Col>
    //           <Col className={classes.span} span={1}>
    //             {login}
    //           </Col>
    //           <Col span={1}>
    //             <Button className={classes.button} onClick={logOutUser}>
    //               Log out
    //             </Button>
    //           </Col>
    //         </>
    //       )
    //       : (
    //         <Col span={1}>
    //           <Button className={classes.button}>
    //             <NavLink to="/login">Login</NavLink>
    //           </Button>
    //         </Col>
    //       )}
    //   </Col>
  );
};

export default HeaderAuthComponent;
