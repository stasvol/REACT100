import React from "react";
import {useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";

import {usersSearchFormValidate} from '../../utility/validateForm/validateForm'
import {filterType} from "../../redux/user_reducer";
import {setFilterSelector} from "../../redux/users_selectors";

type propsTYpe={
    onFilterChange:(filter:filterType)=>void
}
type Friend = 'true'|'false'|'null'
type formType ={
    term:string,
    friend: Friend
}

const UsersSearchForm:React.FC<propsTYpe> =({onFilterChange}:propsTYpe)=> {

    const filter = useSelector(setFilterSelector)

    const submit = (values:formType, {setSubmitting}: {setSubmitting: (isSubmitting: boolean)=>void }) => {
        const filter:filterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        onFilterChange(filter)
        setSubmitting(false);
    }
    return <div>
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
    </div>
}
export default UsersSearchForm