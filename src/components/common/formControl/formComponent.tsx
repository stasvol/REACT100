import React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';

import { ValidatorType } from '../../../utility/validateForm/validator';

import classes from './FormControl.module.css';

const FormComponent: React.FC<WrappedFieldProps> = ({ meta: { touched, error }, children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const hasError = touched && error;

  return (
    <div className={hasError ? classes.error : ''}>
      <div>{children}</div>
      {touched && error && <span className={classes.span}>{error}</span>}
    </div>
  );
};

// eslint-disable-next-line react/no-multi-comp
export const Textarea: React.FC<WrappedFieldProps> = props => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { input, meta, children, ...restProps } = props;
  return (
    <FormComponent {...props}>
      <textarea {...input} {...restProps} />{' '}
    </FormComponent>
  );
};

// eslint-disable-next-line react/no-multi-comp
export const Input: React.FC<WrappedFieldProps> = props => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { input, meta, children, ...restProps } = props;
  return (
    <FormComponent {...props}>
      <input {...input} {...restProps} />{' '}
    </FormComponent>
  );
};

export type GetStringKeys<T> = Extract<keyof T, string>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createField = <FormKeysType extends string>(
  placeholder: string,
  name: FormKeysType,
  validators: Array<ValidatorType>,
  component: React.FC | React.Component | React.FC<WrappedFieldProps>,
  props = {},
  text = '',
): JSX.Element => {
  return (
    <div>
      <Field
        component={component}
        name={name}
        placeholder={placeholder}
        validate={validators}
        {...props}
      />{' '}
      {text}
    </div>
  );
};

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
