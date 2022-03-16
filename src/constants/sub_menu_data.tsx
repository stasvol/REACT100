import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

export const dataSubMenu = [
  {
    idSub: 'sub1',
    image: <UserOutlined />,
    text: 'MY PROFILE',
    addSubMenuOne: {
      id: '1',
      path: '/profile',
      name: 'Profile',
    },
    addSubMenuTwo: {
      id: '2',
      path: '/dialogs',
      name: 'Dialogs',
    },
  },
  {
    idSub: 'sub2',
    image: <LaptopOutlined />,
    text: 'DEVELOPERS',
    addSubMenuOne: {
      id: '3',
      path: '/Users',
      name: 'Users',
    },
    addSubMenuTwo: {
      id: '4',
      path: '/chat',
      name: 'Chat',
    },
  },

  {
    idSub: 'sub3',
    image: <NotificationOutlined />,
    text: 'CHAT',
    addSubMenuOne: {
      id: '5',
      path: '/music',
      name: 'Music Users',
    },
    addSubMenuTwo: {
      id: '6',
      path: '/news',
      name: 'News',
    },
  },
];
