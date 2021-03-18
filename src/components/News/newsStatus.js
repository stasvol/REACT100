import React from "react"
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "./NewSetFormValidators";
import {Input, Textarea} from "./FormControl";
import {useState, useEffect} from "react";


// class NewsStatus extends React.Component {
//
//     state = {
//         editMod: false,
//         status: this.props.status
//     }
//
//     activeEditMod(){
//
//         this.setState({
//             editMod: true
//         })
//         // this.props.newSetStatusThunk()
//     }
//     deActiveEditMod(value){
//         this.setState({
//             editMod: false
//         })
//         this.props.newPutStatusThunk(value.newPutStatus)
//         // (this.state.status)
//         // console.log(value.newPutStatus)
//     }
//     // updateChangeStatus=(e)=>{
//     //
//     //     this.setState({
//     //         status: e.target.value
//     //     })
//     //
//     // }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//
//         if(prevProps.status !== this.props.status) {
//             this.setState({
//                 status:this.props.status
//             })
//         }
//     }
//
//     render(){
//         return(
//             <div>
//                 {!this.state.editMod
//                     ?
//                 <div>
//                     <span onDoubleClick={this.activeEditMod.bind(this)}>{this.props.status  ? this.props.status : "I'm COOL !"}</span>
//                 </div>
//                      :
//                 <div>
//                     <NewsStatusFormRedux onSubmit={this.deActiveEditMod.bind(this)}/>
//                     {/*<input onChange={this.updateChangeStatus} autoFocus={true}*/}
//                     {/*       onBlur={this.deActiveEditMod.bind(this)} value={this.state.status }/>*/}
//                 </div>
//                 }
//             </div>
//         )
//     }
// }
//
// const maxLength30 = maxLength(30);
// const minLength3 =  minLength(3);
//
// const NewsStatusForm = (props) =>{
//
//
//
//     const {handleSubmit} = props
//
//     return(
//         <form  onSubmit={handleSubmit}>
//             <Field name={'newPutStatus'} component={Input} placeholder={'add status'}
//                   validate={[required,maxLength30,minLength3]} />
//         </form>
//     )
// }
// const NewsStatusFormRedux = reduxForm({ form:'newsForm'})(NewsStatusForm)
//
//
// export default NewsStatus

const NewsStatus = (props) => {

    const [editMod, setEditMod] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])


    const activeEditMod = () => {

        setEditMod(true);

        // this.props.newSetStatusThunk()
    }
    const deActiveEditMod = (value) => {
        setEditMod(false);
        props.newPutStatusThunk(value.newPutStatus)
        // (this.state.status)
        // console.log(value.newPutStatus)
    }


    return (
        <div>
            {!editMod
                ?
                <div>
                    <span onDoubleClick={activeEditMod}>{props.status ? props.status : "I'm COOL !"}</span>
                </div>
                :
                <div>
                    <NewsStatusFormRedux  onSubmit={deActiveEditMod} value={status}/>
                    {/*<input onChange={this.updateChangeStatus} autoFocus={true}*/}
                    {/*       onBlur={this.deActiveEditMod.bind(this)} value={this.state.status }/>*/}
                </div>
            }
        </div>
    )

}

const maxLength30 = maxLength(30);
const minLength3 = minLength(3);

const NewsStatusForm = (props) => {


    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <Field name={'newPutStatus'} component={Input} placeholder={'add status'}
                   validate={[required, maxLength30, minLength3]} />
        </form>
    )
}
const NewsStatusFormRedux = reduxForm({form: 'newsForm'})(NewsStatusForm)


export default NewsStatus
