
export const getUsersSelector = (state:any) => {
    return state.usersPage.users
}
export const pageSizeSelector = (state:any) =>{
    return state.usersPage.pageSize
}
export const totalUsersCountSelector = (state:any) =>{
    return state.usersPage.totalUsersCount
}
export  const currentPageSelector = (state:any) =>{
    return state.usersPage.currentPage
}
export const isLoadingSelector = (state:any) =>{
    return state.usersPage.isLoading
}
export const disableButtonSector = (state:any) =>{
    return state.usersPage.disableButton
}

