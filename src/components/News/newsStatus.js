import React from "react"



class NewsStatus extends React.Component {

    state = {
        editMod: false
    }

    activeEditMod(){

        this.setState({
            editMod: true
        })
    }
    deActiveEditMod=()=>{
        this.setState({
            editMod: false
        })
    }

    render(){
        return(
            <div>
                {!this.state.editMod
                    ?
                <div>
                    <span onDoubleClick={this.activeEditMod.bind(this)}>{this.props.status}</span>
                </div>
                     :
                <div>
                    <input autoFocus={true}  onBlur={this.deActiveEditMod} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default NewsStatus