import React from 'react';

export type validatorType = (value:string)=> string | undefined

export const required:validatorType = value => ( value  || typeof  value === 'number' ?  undefined : 'Field is required')

export const  maxLength = (max:number):validatorType => value => (value && value.length > max  ?  `Max length is ${max} symbol`: undefined)

export const  minLength = (min:number):validatorType => value => (value && value.length < min  ?  `Min length is ${min} symbol`: undefined)

export const maxLength30 =  maxLength(30);

export const minLength2 =  minLength(2);

export const usersSearchFormValidate= () => {
    const errors = {};
    return errors;
}
