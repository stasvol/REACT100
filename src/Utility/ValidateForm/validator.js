import React from 'react';


export const required = value => {

  return   (value  || typeof  value === 'number' ?  undefined : 'Field is required')
    //     return  undefined;
    // return 'Field is required';
}

export const  maxLength = max => value => {

 return   (value && value.length > max  ?  `Max length is ${max} symbol`: undefined)

}
// const maxLength20 =  maxLength(20)

export const  minLength = min => value => {

 return   (value && value.length < min  ?  `Min length is ${min} symbol`: undefined)

}
// const minLength2 =  minLength(2)

