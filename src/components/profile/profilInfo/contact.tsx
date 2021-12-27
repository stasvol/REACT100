import React from "react";

type propsContactType={
    contactTitle:string|null,
    contactValue:string|null
}

const Contact:React.FC<propsContactType> = ({contactTitle, contactValue}) => (
    <div>
        <b>{contactTitle}</b> : <i>{contactValue}</i>
    </div>
)

export default Contact