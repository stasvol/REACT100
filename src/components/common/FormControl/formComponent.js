import React from 'react';
import classes from "./FormControl.module.css";
import {Field} from "redux-form";

  const FormComponent = ({input, meta,  child, ...props }) => {

     const hasError = meta.touched &&  meta.error;

    return(
        <div className={ hasError ? classes.error : null} >

            <div >
                {props.children}
            {/*<textarea  {...input} {...props} />*/}
            </div>

            { meta.touched &&  meta.error && <span className={classes.span}>{meta.error}</span> }

        </div>
    )
}
export const Textarea =(props) =>{
    // const {input} = props
    const {input, meta, child, ...restProps } = props
    return <FormComponent {...props} ><textarea {...input} /> </FormComponent>
}

export const Input =(props) =>{
    // const {input} = props
    const {input, meta, child, ...restProps } = props
    return <FormComponent {...props}><input {...input} {...restProps} /> </FormComponent>
}


export const createField = (placeholder,name,validators,component,props={},text="") => (
      <div>
          <Field placeholder={placeholder}  validate={validators} name={name}
                  component={component} {...props} /> {text}
      </div>

)

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

