import React, {useState} from "react";
import style from "./Radio.module.css"

type ItemsType = {
    title: string
    value: any
}

type RadioType = {

    items: ItemsType[]
}


function Radio(props: RadioType) {

    let [checked, setChecked] = useState(false)



    return (
        <div>
            {props.items.map(item => <div key={item.value}><input type={'radio'} checked={checked} onClick={()=> setChecked(!checked)}/>{item.title}</div>)}

        </div>
    )
}

export default Radio