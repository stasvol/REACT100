import {rootReducersType} from "./reduxStore";

export const getUsersSelector = (state:rootReducersType) => {
    return state.usersPage.users
}

export const pageSizeSelector = (state:rootReducersType) =>{
    return state.usersPage.pageSize
}

export const totalUsersCountSelector = (state:rootReducersType) =>{
    return state.usersPage.totalUsersCount
}

export  const currentPageSelector = (state:rootReducersType) =>{
    return state.usersPage.currentPage
}

export const isLoadingSelector = (state:rootReducersType) =>{
    return state.usersPage.isLoading
}

export const disableButtonSector = (state:rootReducersType) =>{
    return state.usersPage.disableButton

}

export const pageNumberSizesSelector = (state:rootReducersType) =>{
    return state.usersPage.pageNumberSizes
}

export const setFilterSelector = (state:rootReducersType) =>{
    return state.usersPage.filter
}

