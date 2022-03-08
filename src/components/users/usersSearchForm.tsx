import React from 'react';
import { Field, Form, Formik } from 'formik';

import { useSearchForm } from '../../hook/useSearchForm';
import { usersSearchFormValidate } from '../../utility/validateForm/validator';
import { FilterType } from '../../redux/user_reducer';

type PropsTYpe = {
  onFilterChange: (filter: FilterType) => void;
};

const UsersSearchForm: React.FC<PropsTYpe> = () => {
  const { filter, submit } = useSearchForm();

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ term: filter?.term, friend: String(filter?.friend) }}
        onSubmit={submit}
        validate={usersSearchFormValidate}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="term" type="text" />
            <Field as="select" name="friend">
              <option value="null">All</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
            </Field>
            <button disabled={isSubmitting} type="submit">
              Find
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UsersSearchForm;
