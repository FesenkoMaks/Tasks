import React from "react";

type LastNamePropsType = {
    value: string
}

export function LastName (props:LastNamePropsType) {
    return(
    <div>
        {props.value}
    </div>
    )
}