const SITE_BAR = 'SITE BAR';

type initialStateSbarType= typeof initialState

export type siteBarNavType={
    id:number,
    name:string,
    img:string,
}

let initialState = {

    siteBarNav: [
        {
            id: 1,
            name: 'Andre',
            img: 'https://i.pinimg.com/236x/f6/7b/0a/f67b0a5c466acc6456d3562523616f24.jpg'
        },
        {
            id: 2,
            name: 'Oleg',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRuFmGwLYEtQM33nVq8_WmqqPg5_fag4ZkA&usqp=CAU'
        },
        {
            id: 3,
            name: 'Ivan',
            img: 'https://i.pinimg.com/236x/4d/fa/04/4dfa04c4070771935150bad24ac02cbf.jpg'
        },
    ] as Array<siteBarNavType>,


}

const siteBarReducer = (state = initialState, action:siteBarActionCreatorType):initialStateSbarType => {

    switch (action.type) {
        case SITE_BAR:
            let friend = {
                id: 4,
                name: 'FRiEND',
                img: 'https://lh3.googleusercontent.com/proxy/krN8SvINewOOKbbVK5ooDb2G7CzD46uX9l_Mp693MVsNUw402CT53gHtQXW9gvKhJ3zVeZy_IG2h3KRGAgjFwTyBDLUyNK4KWH3uHw'
            }
            return {
                ...state,
                siteBarNav: [...state.siteBarNav, friend]
            }
        // state.siteBarNav.push(friend);

        default:
            return state
    }

}
type siteBarActionCreatorType={
    type: typeof SITE_BAR,
    userId:number
}
export const siteBarActionCreator = (userId:number):siteBarActionCreatorType => ({type: SITE_BAR, userId});

export default siteBarReducer