import React from 'react'
import {createField, Input, Textarea} from "./FormControl";
import {Field, reduxForm} from "redux-form";
import {required} from "./NewSetFormValidators";


const ContactNewForm = ({handleSubmit,error,...props}) =>{

    return(
        <form onSubmit={handleSubmit}>

        <div>



            {  <button onClick={ ()=>{}}>SAVE</button> }
            { error &&  <div>ERROR: {error}</div>}
               <div>
                    <b>Name:</b>
                       <Field name={'fullName'}  component={Input} placeholder={'add data'}
                                              validate={[required]}/>

                       {/*{ createField( "Full name", "aboutMe", [require], Input)}*/}
               </div>

            <div>
                <b>About Me:</b>
                <Field name={'aboutMe'}  component={Input} placeholder={'add data'}
                       validate={[required]}/>

            </div>

            <div>
                <b>LookingForAJobDescription:</b>
                <Field name={'LookingForAJobDescription'}  component={Input} placeholder={'add data'}
                       validate={[required]}/>

            </div>

            <div>
                 <b>Contacts :</b>
                {/*<Field name={'fullName'}  component={Input} placeholder={'contacts'}*/}
                {/*                               validate={[required]}/>*/}
                    {/*{props.users.contacts}*/}

                <b>github:</b> <Field name={'github'}  component={Input} placeholder={'github'}
                                     validate={[required]}/>
                    {/*{props.users.github}*/}
            </div>
            <div>
                <b>VK:</b>  <Field name={'vk'}  component={Input} placeholder={'VK'}
                                   validate={[required]}/>
                {/*{props.users.vk}*/}
            </div>
            <div>
                <b>Facebook:</b>  <Field name={'facebook'}  component={Input} placeholder={'facebook'}
                                         validate={[required]}/>
                {/*{props.users.facebook}*/}
            </div>
            <div>
                <b>Instagram: </b>  <Field name={'instagram'}  component={Input} placeholder={'instagram'}
                                           validate={[required]}/>
                {/*{props.users.instagram}*/}
            </div>
            <div>
                <b>Twitter: </b>   <Field name={'twitter'}  component={Input} placeholder={'twitter'}
                                          validate={[required]}/>
                {/*{props.users.twitter}*/}
            </div>

        {/*</div>*/}
        {/*    <div>*/}
        {/*        <div><b>Contacts:</b> {Object.keys(props.users.contacts).map(key => {*/}
        {/*             return  <Contacts key={key} contactTitle={key} contactValue={props.users.contacts[key]} />*/}
        {/*        })}</div>*/}
        {/*    </div>*/}
        {/*    <div>*/}
            {/*<Contacts {...props}/>*/}
        </div>
        </form>
    )
}

const ContactNewReduxForm = reduxForm({
    form:"contactForm"
  })(ContactNewForm)

export default ContactNewReduxForm

// const SettingFormContainer = reduxForm({
//     form: 'setOne'
// })(SettingForm)