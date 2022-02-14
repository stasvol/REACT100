import dialogReducer from './dialog_reducer';
import postReducer from './prof_reducer';
import siteBarReducer from './sitebar_reducer';

const store = {
  _state: {
    dialogPage: {
      DialogData: [
        { id: 1, name: 'Artur', img: 'https://avatarko.ru/img/kartinka/1/monstr_kot.jpg' },
        {
          id: 2,
          name: 'Diana',
          img: 'https://www.meme-arsenal.com/memes/c1e1c57e0465d02cf0b0d7f88425d2ea.jpg',
        },
        {
          id: 3,
          name: 'Lesya',
          img: 'https://i.pinimg.com/originals/6c/c4/b4/6cc4b42d17e1716282a138d1d93028cf.jpg',
        },
        {
          id: 4,
          name: 'Viktor',
          img: 'https://i.pinimg.com/736x/da/d0/a7/dad0a79db4cd810e3b3aa5c56dfc6742.jpg',
        },
        { id: 5, name: 'Andre', img: 'https://bipbap.ru/wp-content/uploads/2017/10/8cb.jpg' },
        {
          id: 6,
          name: 'Tom',
          img: 'https://chance2.ru/photo/img/krasivye-koshki-foto-na-avatarku-2.jpg',
        },
        {
          id: 7,
          name: 'Stas',
          img: 'https://i.pinimg.com/474x/01/b9/cf/01b9cfe00d3987af5cbb8d06688affbe.jpg',
        },
        {
          id: 8,
          name: 'Vova',
          img: 'https://www.meme-arsenal.com/memes/e0d6c17f7cdbf397eaa821e56e2c1b51.jpg',
        },
        {
          id: 9,
          name: 'Vovan',
          img: 'https://i.pinimg.com/originals/5b/1a/9a/5b1a9ab141ba1ade4ab06c8215059225.jpg',
        },
      ],
      MessageUserData: [
        { id: 1, message: 'Vse klas' },
        { id: 2, message: 'Super' },
        { id: 3, message: 'Klasno' },
        { id: 4, message: 'VOOOO !!!' },
        { id: 5, message: 'YO-YO-YO-YO' },
        { id: 6, message: 'YO-MO-YO' },
      ],

      newMessageText: 'Hi',
    },

    postPage: {
      PostData: [
        { id: 1, like: '20', message: 'Super' },
        { id: 2, like: '3', message: 'Kliovo' },
        { id: 3, like: '9', message: 'Class' },
      ],

      newText: 'Hello',
    },

    siteBar: {
      siteBarNav: [
        {
          id: 1,
          name: 'Andre',
          img: 'https://i.pinimg.com/236x/f6/7b/0a/f67b0a5c466acc6456d3562523616f24.jpg',
        },
        {
          id: 2,
          name: 'Oleg',
          img:
            'https://encrypted-tbn0.gstatic' +
            '.com/images?q=tbn:ANd9GcRlRuFmGwLYEtQM33nVq8_WmqqPg5_fag4ZkA&usqp=CAU',
        },
        {
          id: 3,
          name: 'Ivan',
          img: 'https://i.pinimg.com/236x/4d/fa/04/4dfa04c4070771935150bad24ac02cbf.jpg',
        },
      ],
    },
  },

  getState() {
    return this._state;
  },

  _subscriber() {
    console.log('state  changed');
  },

  subscribe(observer) {
    this._subscriber = observer;
  },

  dispatch(action) {
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
    this._state.postPage = postReducer(this._state.postPage, action);
    this._state.siteBar = siteBarReducer(this._state.siteBar, action);

    this._subscriber(this._state);
  },
};

export default store;
