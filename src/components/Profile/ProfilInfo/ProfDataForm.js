import React from 'react'
import {InjectedFormProps, reduxForm} from "redux-form";
import classes from "./ProfilInfo.module.css";
import smail from "../../../Photo/Images/smail.png";
import {createField, Input, Textarea} from "../../common/FormControl/formComponent";



const ProfDataForm = ({...props}) => {

        const { handleSubmit } = props;

        return  <form  onSubmit={handleSubmit}>

            <button type={"submit"}>Save</button>

            { props.error
                ?  <div className={classes.formError}>
                    {props.error}
                </div>
                :  ''
            }

            <div><b>FullName</b> : {createField( "FullName",
                "fullName", [],  Input)}</div>
                {/*{props.profile.fullName}</div>*/}

            <div><b>LookingForAJob</b> : {createField( "", "lookingForAJob",
                [],  Input,{type:"checkbox"})}
        {/*        {props.profile.lookingForAJob ? 'Yes' : 'No'}*/}
        {/*        <img className={classes.smail} src={smail} alt={'image'}/>*/}
            </div>
        {/*    {props.profile.lookingForAJob &&*/}
            <div><b>My professional skills</b> : {createField( "My professional skills", "lookingForAJobDescription",
                [],  Textarea)}
        {/*        {props.profile.lookingForAJobDescription}</div>{/*    }*/}
            </div>
            <div><b>About Me</b> : {createField( "About Me", "aboutMe", [],  Textarea)}
                {/*        {props.profile.aboutMe}</div>*/}
            </div>
            <div>
            <h4><b>Contacts</b> : </h4> {Object.keys(props.profile.contacts).map(key => {
              return <div key={key}>
                   <i>{key} : </i>
                  {createField(key,"contacts."+ key, [],  Input)}
              </div>
            })}
            {/*return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>})}*/}
            </div>

        </form>


    }

     const ProfDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfDataForm)

export default ProfDataFormReduxForm