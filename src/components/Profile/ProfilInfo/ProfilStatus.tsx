import React, {ChangeEvent, ChangeEventHandler} from "react";
import classes from './ProfilInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import smail from "../../../Photo/Images/smail.png"

interface propsType {
    status:string,
    updateStatus:(newStatus:string)=>void
}

interface stateType {
    editMode: boolean,
    status: string
}

class ProfilStatus extends React.Component<propsType, stateType> {

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

    changeStatus = (e:ChangeEvent<HTMLInputElement>) => {
         this.setState({
              status: e.target.value
         })

    }
    componentDidUpdate(prevProps:propsType, prevState:stateType, snapshot:any) {

      if (prevProps.status !== this.props.status ) {
          this.setState({
              status: this.props.status
          })
      }
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