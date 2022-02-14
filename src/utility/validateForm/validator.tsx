export type ValidatorType = (value: string) => string | undefined;

export const required: ValidatorType = value =>
  value || typeof value === 'number' ? undefined : 'Field is required';

export const maxLength =
  (max: number): ValidatorType =>
    value =>
      value && value.length > max ? `Max length is ${max} symbol` : undefined;

export const minLength =
  (min: number): ValidatorType =>
    value =>
      value && value.length < min ? `Min length is ${min} symbol` : undefined;

export const maxLength30 = maxLength(30);

export const minLength2 = minLength(2);

export const usersSearchFormValidate = (): Record<string, unknown> => {
  const errors = {};
  return errors;
};
