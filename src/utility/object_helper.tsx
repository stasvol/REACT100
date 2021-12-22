import React from "react";
import { usersType } from "../redux/user_reducer";

// type updateObjectInArrayType={
//     items:any,
//     itemId:any,
//     objPropertyName:any,
//     newObjProps:any
// }

export const updateObjectInArray = (items:any,itemId:any,objPropertyName:any,newObjProps:any) => {

   return    items.map((u:any)=> {
        if (u[objPropertyName] ===  itemId) {
            return {...u, ...newObjProps};
        }
        return  u;
});
}
