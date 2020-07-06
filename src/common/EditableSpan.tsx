import React, {ChangeEvent, useState} from "react";
import {MyInput} from "./MyInput";

type EditableSpanType = {
    title: string
    saveTitle: (e: ChangeEvent<HTMLInputElement>) => void
}

function EditableSpan(props:EditableSpanType) {
    const onEditMod = () => {
        setEditMod(true)
    }
    const offEditMod = () => {
        setEditMod(false);


    }



    let [editMod, setEditMod] = useState(false)

    return (editMod
        ? <MyInput value={props.title}
                   autoFocus={true}
                   onBlur={offEditMod}
                   onChange={props.saveTitle}
        />
        : <span onDoubleClick={onEditMod}>{props.title}</span>

    )}



export default EditableSpan;