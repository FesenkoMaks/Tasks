import React, {DetailedHTMLProps, InputHTMLAttributes, ButtonHTMLAttributes} from "react";
import s from './MyInput.module.css'



export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
                                    & {btnName:string, btnType: string}

export function ButtonNya (props: ButtonNyaPropsType) {

    return <button className={props.btnType === 'classic' ? s.buttonNya : s.buttonRed} {...props}>{props.btnName}</button>
}