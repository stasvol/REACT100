const SITE_BAR = 'SITE BAR';

let initialState = {
    siteBar: {
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
        ],
    }

}

const siteBarReducer = (state=initialState, action) =>{

        //
        // switch (action.type) {
        //     case SITE_BAR:

                return  state
}


export const siteBarActionCreator = ()=>({ type:SITE_BAR});

export default siteBarReducer