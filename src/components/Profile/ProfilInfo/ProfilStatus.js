import React from "react";
import classes from './ProfilInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import smail from "../../../Photo/Images/smail.png"

class ProfilStatus extends React.Component {

     state = {
         editMode: false
    }

    activeEditMode ()  {
         this.setState({
             editMode: true
         })
        // this.state.editMode=true;
        // this.forceUpdate();
     }
    deActiveEditMode ()  {
        this.setState({
            editMode: false
        })
        // this.state.editMode=true;
        // this.forceUpdate();
    }


    render() {
        // if (!this.props.profile){return <Preloader />}
        return (
            <div>
                {!this.state.editMode
                    ?
                        <div>
                            <span onDoubleClick={this.activeEditMode.bind(this)}><i>{this.props.status}</i></span>
                        </div>
                    :
                        <div>
                            <input autoFocus={true} onBlur={this.deActiveEditMode.bind(this)} type={'text'} placeholder={this.props.status}/>
                        </div>
                }
            </div>
        )
    }
}

export default ProfilStatus