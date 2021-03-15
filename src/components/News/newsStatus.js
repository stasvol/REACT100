import React from "react"
import {Field, reduxForm} from "redux-form";



class NewsStatus extends React.Component {

    state = {
        editMod: false,
        status: this.props.status
    }

    activeEditMod(){

        this.setState({
            editMod: true
        })
        // this.props.newSetStatusThunk()
    }
    deActiveEditMod(value){
        this.setState({
            editMod: false
        })
        this.props.newPutStatusThunk(value.newPutStatus)
        // (this.state.status)
        // console.log(value.newPutStatus)
    }
    // updateChangeStatus=(e)=>{
    //
    //     this.setState({
    //         status: e.target.value
    //     })
    //
    // }
    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps.status !== this.props.status) {
            this.setState({
                status:this.props.status
            })
        }
    }

    render(){
        return(
            <div>
                {!this.state.editMod
                    ?
                <div>
                    <span onDoubleClick={this.activeEditMod.bind(this)}>{this.props.status  ? this.props.status : "I'm COOL !"}</span>
                </div>
                     :
                <div>
                    <NewsStatusFormredux onSubmit={this.deActiveEditMod.bind(this)}/>
                    {/*<input onChange={this.updateChangeStatus} autoFocus={true}*/}
                    {/*       onBlur={this.deActiveEditMod.bind(this)} value={this.state.status }/>*/}
                </div>
                }
            </div>
        )
    }
}

const NewsStatusForm = (props) =>{

    const {handleSubmit} = props
    return(
        <form  onSubmit={handleSubmit}>
            <Field name={'newPutStatus'} component={'input'} placeholder={''} />
        </form>
    )
}
const NewsStatusFormredux = reduxForm({ form:'newsForm'})(NewsStatusForm)


export default NewsStatus

