import React, {ChangeEvent, useState} from 'react';
import EditableSpan from "../../common/EditableSpan";

import s from "./Junior.module.css"
import {ButtonNya} from "../../common/MyButton";
import MySelect from "../../common/MySelect";
import Radio from "../../common/Radio";
import {ArrayType} from "../homeWorkReducer";
import {ArrayPeople} from "../ArrayPeople";
import {Data} from "../../common/Data";


export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString);
    console.log(state)
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
    console.log(defaultState);

}

type StateType = {
    x: string
    y: number
}
saveState<StateType>("test", {x: "A", y: 1});
// сохраняем объект типа StateType в ячейке "test"

const state: StateType = restoreState<StateType>("test", {x: "", y: 0});

// получем в переменную state объект из ячейки "test" или дэфолтный объект если ячейка пуста

function Junior() {


    let [title, setTitle] = useState('Hello')

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }


    let [value, setValue] = useState('1')
    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }


    return (
        <div className={s.junior}>
            <div className={s.con}>
                <EditableSpan title={title} saveTitle={changeTitle}/>

                <div>
                    <ButtonNya
                        btnName={'Save'}
                        btnType={'classic'}
                        onClick={() => saveState('test', title)}
                    />
                    <ButtonNya
                        btnName={'Return'}
                        btnType={'classic'}

                        onClick={() => setTitle(restoreState('test', title))}/>
                </div>
            </div>
            <div className={s.con}>
                <MySelect items={[
                    {title: 'Minsk', value: '1'},
                    {title: 'Moscow', value: '2'},
                    {title: 'Kiev', value: '3'},
                ]}/>
            </div>
            <div className={s.con}>
                <Radio
                    onChange={changeValue}
                    value={value}
                    name={'city'}
                    items={[
                        {title: 'Minsk', value: '1'},
                        {title: 'Moscow', value: '2'},
                        {title: 'Kiev', value: '3'},
                    ]}/>
            </div>
            <div className={s.con}>
                <ArrayPeople/>
            </div>
            <div>
                <Data/>
            </div>

        </div>
    )
}


export default Junior;