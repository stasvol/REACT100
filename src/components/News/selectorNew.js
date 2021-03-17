 import React from "react";
 import {createSelector} from "reselect";

export const newUsers = state => state.users.users;
export const newCountUsersSet = state => state.users.countUsersSet;
export const newPageSizeSet = state => state.users.pageSizeSet;
export const newCurrentPageSet = state => state.users.currentPageSet;
export const newIsLoad = state => state.users.isLoad;
export const newProf = state => state.users.prof;
export const newIsSetAuth = state => state.setAuth.isSetAuth;
export const newLogin = state => state.setAuth.login;
export const newSetDisableBut = state => state.users.setDisableBut;
export const newStatus = state => state.users.status;
export const newIdAuth = state => state.setAuth.id;

// export const newUsersReselector = createSelector(newUsers,newIsLoad,
//     (users,isLoad)=>{
//     return  users.filter(key=>true)
//     })
