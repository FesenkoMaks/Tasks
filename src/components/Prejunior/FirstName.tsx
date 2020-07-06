import React from "react";

type FirstNamePropsType = {
    value: string
}

export function FirstName (props:FirstNamePropsType) {
    return(
        <div>
            {props.value}
        </div>
    )
}