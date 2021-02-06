import React from "react";
import classes from './ProfilInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import smail from "../../../Photo/Images/smail.png"

class ProfilStatus extends React.Component {

     state = {
         editMode: false,
         status: this.props.status
    }

    activeEditMode = () => {

       // console.log(this)
         this.setState({
             editMode: true
         })
        // this.state.editMode=true;
        // this.forceUpdate();
        // console.log(this.state.editMode)
     }
    deActiveEditMode ()  {

        this.setState({
            editMode: false
        })
        // this.state.editMode=true;
        // this.forceUpdate();
        this.props.updateStatus(this.state.status);
     }

    changeStatus = (e) => {
         this.setState({
              status: e.target.value
         })

    }



    render() {
        // if (!this.props.profile){return <Preloader />}
        return (
            <div>
                {!this.state.editMode
                    ?
                        <div className={classes.status}>
                            <span onDoubleClick={this.activeEditMode}><i>STATUS:</i>  {this.props.status || "'Noy status'"}</span>
                        </div>
                    :
                        <div className={classes.status}>
                            <input  onChange={this.changeStatus} autoFocus={true} onBlur={this.deActiveEditMode.bind(this)} type={'text'} value={this.state.status}/>
                        </div>
                }
            </div>
        )
    }
}


export default ProfilStatus