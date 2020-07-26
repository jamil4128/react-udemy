import React from "react";

const UserOutput=(props)=>{
    return(
        <div>
            <p>Hello {props.name}</p>
            <p onClick={props.click}>Change Name</p>
        </div>
    )
}
export default UserOutput;