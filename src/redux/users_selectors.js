
export const getUsersSelector = (state) => {
    return state.usersPage.users
}
export const pageSizeSelector = (state) =>{
    return state.usersPage.pageSize
}
export const totalUsersCountSelector = (state) =>{
    return state.usersPage.totalUsersCount
}
export  const currentPageSelector = (state) =>{
    return state.usersPage.currentPage
}
export const isLoadingSelector = (state) =>{
    return state.usersPage.isLoading
}
export const disableButtonSector = (state) =>{
    return state.usersPage.disableButton
}

