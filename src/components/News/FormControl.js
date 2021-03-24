import React from 'react'
import classes from './News.module.css'
import {Field} from "redux-form";

 export  const FormControl = ({input,meta,children, ...props})=>{

    const someError =  meta.touched && meta.error

    return (
        <div>
            <div className={ someError &&  classes.divError}>
                {children}
                {/*<textarea {...input} {...props} />*/}
            </div>
            <div>
                { someError  &&   <span className={classes.spanError}>{meta.error}</span>}
            </div>
        </div>
    )

}

// export const Textarea = ({input,meta, ...props})=>{
//
//     const someError =  meta.touched && meta.error
//
//    return (
//        <div>
//            <div className={ someError &&  classes.divError}>
//            <textarea {...input} {...props} />
//            </div>
//            <div>
//                { someError  &&   <span className={classes.spanError}>{meta.error}</span>}
//            </div>
//        </div>
//    )
//
// }

export const Textarea = (props) => {
    const {input,meta,children, ...restProps} = props
    return < FormControl {...props}><textarea {...input}  /></FormControl>
}

export const Input = (props) => {
    const {input,meta,children, ...restProps} = props
    return <FormControl {...props}><input {...input} /></FormControl>
}

export const createField = (placeholder,name,validators,component,props={},text="") => (
    <div>
        <Field placeholder={placeholder}  validate={validators} name={name}
               component={component} {...props} /> {text}
    </div>

)
