const SITE_BAR = 'SITE BAR';

export type InitialStateSBarType = typeof initialState;

export type SiteBarNavType = {
  id: number;
  name: string;
  img: string;
};
// export type InitialStateType = typeof initialState;

let initialState = {
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
        'https://encrypted-tbn0.gstatic.com/images?' +
        'q=tbn:ANd9GcRlRuFmGwLYEtQM33nVq8_WmqqPg5_fag4ZkA&usqp=CAU',
    },
    {
      id: 3,
      name: 'Ivan',
      img: 'https://i.pinimg.com/236x/4d/fa/04/4dfa04c4070771935150bad24ac02cbf.jpg',
    },
  ] as Array<SiteBarNavType>,
};

const siteBarReducer = (
  state = initialState,
  action: SiteBarActionCreatorType,
): InitialStateSBarType => {
  let siteBar;
  let friend;
  switch (action.type) {
    case SITE_BAR:
      siteBar = state.siteBarNav;
      friend = {
        id: 4,
        name: 'FRiEND',
        img:
          'https://lh3.googleusercontent.com/proxy/krN8SvINewOOKbbVK5ooDb2G7CzD46uX9l' +
          '_Mp693MVsNUw402CT53gHtQXW9gvKhJ3zVeZy_IG2h3KRGAgjFwTyBDLUyNK4KWH3uHw',
      };
      return {
        ...state,
        siteBarNav: [...siteBar, friend],
      };

    default:
      return state;
  }
};
export type SiteBarActionCreatorType = {
  type: typeof SITE_BAR;
  userId: number;
};
export const siteBarActionCreator = (userId: number): SiteBarActionCreatorType => ({
  type: SITE_BAR,
  userId,
});

export default siteBarReducer;
