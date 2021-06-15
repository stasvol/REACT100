import React from "react";
import {Field, Form, Formik} from "formik";
import {filterType} from "../../redux/user_reducer";
import {useSelector} from "react-redux";
import {setFilterSelector} from "../../redux/users_selectors";

type propsTYpe={
    onFilterChange:(filter:filterType)=>void
}
type Friend = 'true'|'false'|'null'
type formType ={
    term:string,
    friend: Friend
}
const usersSearchFormValidate= (values:any) => {
    const errors = {};
    return errors;
}

const UsersSearchForm:React.FC<propsTYpe> =(props)=> {

    const filter = useSelector(setFilterSelector)

    const submit = (values:formType, {setSubmitting}: {setSubmitting: (isSubmitting: boolean)=>void }) => {
        // setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        // }, 400);
        const filter:filterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }

        props.onFilterChange(filter)
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