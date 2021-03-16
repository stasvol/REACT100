import React from 'react'

export const required = (value) => {
    if (!value) {
        return 'Required';
    }
}
// const required2 = value => !value.trim() && 'Required';       // required2 == required4
// const required4 = value => !value.trim() ? 'Required' : undefined;
// const required3 = value => value.trim() || 'Required';

export const maxLength = max => value => value.length > max && `Max length > ${max} symbol`;
export const minLength = min => value => value.length < min && `Min length < ${min} symbol`;

// export const minLength =(minLength) =>(value)=> {
//     if ( value.length < minLength) return `Min length < ${minLength} symbol`;
//
// }