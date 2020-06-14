import React, {useState} from "react";
import s from './Input.module.css';
import {v1} from "uuid";

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


    return (
        <div className={s.inputItem}>
            <input
                value={names}
                onChange={(e) => {setNames(e.currentTarget.value)}}
                onKeyPress={(e) => { if (e.charCode === 13){hiPeople()}}}
            />
            <button onClick={hiPeople}>+</button>
            <span>{sum.length}</span>
        </div>
    )
}

export default Input;