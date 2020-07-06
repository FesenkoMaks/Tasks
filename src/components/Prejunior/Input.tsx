import React, {useState} from "react";
import s from './Input.module.css';
import {v1} from "uuid";
import { MyInput } from "../../common/MyInput";
import { ButtonNya } from "../../common/MyButton";

type NameType = {
    name: string,
    id: string
}
function Input() {

    let [sum, setSum] = useState<Array<NameType>>([]);

    let [names, setNames] = useState('');

    function hiPeople() {
        if (names !== '') {
            alert('Hi ' + names);
            setNames('');
            setSum([...sum, {name: names, id: v1()}]);
        }
    }

    const onChangeHandler = (e:any) => {setNames(e.currentTarget.value)}
    const onKeyPressHandler = (e: any) => { if (e.charCode === 13){hiPeople()}}


    return (
        <div className={s.inputItem}>
            {/*<input*/}
            {/*    value={names}*/}
            {/*    onChange={onChangeHandler}*/}
            {/*    onKeyPress={onKeyPressHandler}*/}
            {/*/>*/}
            <MyInput
                value={names}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            {/*<button onClick={hiPeople}>+</button>*/}
            <ButtonNya onClick={hiPeople} btnName={'+'} btnType={'classic'}/>
            <span>{sum.length}</span>
        </div>
    )
}

export default Input;