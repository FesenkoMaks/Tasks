import React from "react";
import s from './Messges.module.css';

type PropsMessageProps = {
    name: string
    text: string
    time: string | number
}

export function Messages (props:PropsMessageProps) {
    return(
        <div className={s.messages}>
            <div className={s.ava}>
                <img src={'data:image/jpeg;base64,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'}/>
            </div>
            <div className={s.message}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.textMessage}>
                    {props.text}
                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}