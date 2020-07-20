import React, {ChangeEvent, useState} from 'react';
import EditableSpan from "../../common/EditableSpan";

import s from "./Junior.module.css"
import {ButtonNya} from "../../common/MyButton";
import MySelect from "../../common/MySelect";
import Radio from "../../common/Radio";


export function saveState<T> (key: string, state: T) {
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

const state: StateType = restoreState<StateType>("test", {x: "", y: 0})  ;
// получем в переменную state объект из ячейки "test" или дэфолтный объект если ячейка пуста

function Junior() {


    let [title, setTitle] = useState('Hello')

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }



    return (
        <div className={s.junior}>
            <EditableSpan title={title} saveTitle={changeTitle}/>

               <div>
                    {/*<button onClick={() => saveState('test', title)}>Save</button>*/}
                    {/*<button onClick={() => setTitle(restoreState('test', title))}>Return</button>*/}
                   <ButtonNya btnName={'Save'} btnType={'classic'} onClick={() => saveState('test', title)}/>
                   <ButtonNya btnName={'Return'} btnType={'classic'} onClick={() => setTitle(restoreState('test', title))}/>
                </div>
                <MySelect items={[
                    {title: 'Minsk', value: '1'},
                    {title: 'Moscow', value: '2'},
                    {title: 'Kiev', value: '3'},
                ]}/>
                <Radio items={[
                    {title: 'Minsk', value: '1'},
                    {title: 'Moscow', value: '2'},
                    {title: 'Kiev', value: '3'},
                ]}/>

        </div>
    )
}

export default Junior;