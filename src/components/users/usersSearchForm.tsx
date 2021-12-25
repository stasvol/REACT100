import React from "react";
import {Field, Form, Formik} from "formik";

import {Friend, useSearchForm} from "../../hock/useSearchForm";
import {usersSearchFormValidate} from '../../utility/validateForm/validateForm'
import {filterType} from "../../redux/user_reducer";

type propsTYpe={
    onFilterChange:(filter:filterType)=>void
}

const UsersSearchForm:React.FC<propsTYpe> =()=> {

    const {filter, submit } = useSearchForm()

    return(
        <>
        <Formik
            enableReinitialize={true}
            initialValues={{ term: filter.term,friend: String(filter.friend) as Friend }}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({ isSubmitting}) => (
                <Form >
                    <Field type="text" name="term"/>
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </>
    )
}

export default UsersSearchForm