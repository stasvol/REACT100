import React from "react"



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
    deActiveEditMod(){
        this.setState({
            editMod: false
        })
        this.props.newPutStatusThunk(this.state.status)

    }
    updateChangeStatus=(e)=>{

        this.setState({
            status: e.target.value
        })

    }
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
                    <input onChange={this.updateChangeStatus} autoFocus={true}
                           onBlur={this.deActiveEditMod.bind(this)} value={this.state.status }/>
                </div>
                }
            </div>
        )
    }
}


export default NewsStatus