import React, {ChangeEvent, useState} from "react";
import style from "./Radio.module.css"

type ItemsType = {
    title: string
    value: any
}

type RadioType = {
    name: string
    items: ItemsType[]
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    value: string
}


function Radio(props: RadioType) {




    return (
        <div>
            {props.items.map(item =>
                <div key={item.value} className={style.itemRadio}><input
                    type={'radio'}
                    name={props.name}
                    value={item.value}
                    checked={item.value === props.value}
                    onChange={props.onChange}
                />{item.title}</div>)}

        </div>
    )
}

export default Radio