import React from 'react';
import classes from "./FormControl.module.css";
import {Field, WrappedFieldProps} from "redux-form";
import {validatorType} from "../../../Utility/ValidateForm/validator";


// interface formComponentPropsType{
//     meta:{
//         touched: boolean,
//         error: string
//     },
//     children: React.ReactNode
// }

  const FormComponent:React.FC<WrappedFieldProps> = ({input, meta:{touched,error},children}) => {

     const hasError = touched &&  error;

    return(
        <div className={ hasError ? classes.error : ""} >

            <div >
                {children}
            {/*<textarea  {...input} {...props} />*/}
            </div>

            { touched &&  error && <span className={classes.span}>{error}</span> }

        </div>
    )
}
export const Textarea:React.FC<WrappedFieldProps> =(props) =>{
    // const {input} = props
    const {input, meta, children, ...restProps } = props
    return <FormComponent {...props} ><textarea {...input} /> </FormComponent>
}

export const Input:React.FC<WrappedFieldProps> =(props) =>{
    // const {input} = props
    const {input, meta, children, ...restProps } = props
    return <FormComponent {...props}><input {...input} {...restProps} /> </FormComponent>
}


export function createField <formKeysType extends string> (placeholder:string,
                                                           name:formKeysType,
                                                           validators:Array<validatorType>,
                            component:string|React.FC|React.Component|React.FC<WrappedFieldProps>,
                            props={},text="") {
         return  <div>
        <Field placeholder={placeholder} validate={validators} name={name}
               component={component} {...props} /> {text}
    </div>

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

