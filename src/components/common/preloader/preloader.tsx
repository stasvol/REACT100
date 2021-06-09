import React from "react";
import preloader from "../../../Photo/Images/760.svg";


const Preloader:React.FC = () =>{
    return (
        <div>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}

export default Preloader