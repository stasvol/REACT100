import React from 'react'
import classes from './News.module.css'

 export  const FormControl = ({input,meta,child, ...props})=>{

    const someError =  meta.touched && meta.error

    return (
        <div>
            <div className={ someError &&  classes.divError}>
                {props.children}
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
    const {input,meta,child, ...restProps} = props
    return < FormControl {...props}><textarea {...input}  /></FormControl>
}

export const Input = (props) => {
    const {input,meta,child, ...restProps} = props
    return <FormControl {...props}><input {...input} /></FormControl>
}
