import React from 'react';
import {Field, WrappedFieldProps} from "redux-form";

import {validatorType} from "../../../utility/validateForm/validator";

import classes from "./FormControl.module.css";

const FormComponent: React.FC<WrappedFieldProps> =
    ({meta: {touched, error}, children}) => {
        const hasError = touched && error;

        return (
            <div className={hasError ? classes.error : ""}>
                <div>
                    {children}
                </div>
                {touched && error && <span className={classes.span}>{error}</span>}
            </div>
        )
    }

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormComponent {...props} ><textarea {...input} {...restProps} /> </FormComponent>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormComponent {...props}><input {...input} {...restProps} /> </FormComponent>
}

export type GetStringKeys<T> = Extract<keyof T, string>

export const createField = <formKeysType extends string>(placeholder: string,
                                                         name: formKeysType,
                                                         validators: Array<validatorType>,
                                                         component: React.FC | React.Component | React.FC<WrappedFieldProps>,
                                                         props = {}, text = "") => {
    return (
        <div>
            <Field placeholder={placeholder} validate={validators} name={name}
                   component={component} {...props} /> {text}
        </div>
    )
}

// meta: { touched, error, warning }

// export const Input = ({input, meta, ...props }) => {
//
//     const hasError = meta.touched &&  meta.error;
//
//     return(
//         <div className={ hasError ? classes.error : null} >
//
//             <div >
//                 <input  {...input} {...props} />
//             </div>
//
//             { meta.touched &&  meta.error && <span className={classes.span}>{meta.error}</span> }
//
//         </div>
//     )
// }
// export const Textarea = ({input, meta, ...props }) => {
//
//     const hasError = meta.touched &&  meta.error;
//
//     return(
//         <div className={ hasError ? classes.error : null} >
//
//             <div >
//                 <textarea  {...input} {...props} />
//             </div>
//
//             { meta.touched &&  meta.error && <span className={classes.span}>{meta.error}</span> }
//
//         </div>
//     )
// }

