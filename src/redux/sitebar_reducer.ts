import { initialState } from '../constants/sitebar_state';

const SITE_BAR = 'SITE BAR';

export type InitialStateSBarType = typeof initialState;

export type SiteBarNavType = {
  id: number;
  name: string;
  img: string;
};
// export type InitialStateType = typeof initialState;

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
