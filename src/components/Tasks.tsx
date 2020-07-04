import React, {useState} from "react";
import s from './Tasks.module.css';
import {ButtonNya} from "../common/MyButton";



function Tasks() {

    let [arr, setArr] = useState([
        {id: 1, n: "Work", p: "High" },
        {id: 2, n: "Football", p: "Middle" },
        {id: 3, n: "React", p: "High" },
        {id: 4, n: "HTML", p: "low" },
    ])

    function RemoveTask(id:number) {
        let filterTasks = arr.filter(t => t.id != id)
        setArr(filterTasks)
    }

    let [filter, setFilter] = useState<'High' | "Middle" | "Low" | "All">("All")

    let newArr = arr

    if (filter === 'High'){
        newArr = arr.filter(t => t.p === 'High')
    }
    if (filter === 'Middle'){
        newArr = arr.filter(t => t.p === 'Middle')
    }
    if (filter === 'Low'){
        newArr = arr.filter(t => t.p === 'low')
    }
    if (filter === 'All'){
        newArr = arr
    }

     function changeFilter(value: 'High' | "Middle" | "Low" | "All" ) {
        setFilter(value)
    }

    const listItem = newArr.map((el) =>
        <li key={el.id.toString()}>{el.n}

            <ButtonNya onClick={() => {RemoveTask(el.id)}} btnName={'x'} btnType={'red'}/>
        </li>)

    const btnFilter = <div className={s.btnFilter}>

        <ButtonNya onClick={() => {changeFilter('High')}} btnName={'High'} btnType={'classic'}/>
        <ButtonNya onClick={() => {changeFilter('Middle')}} btnName={'Middle'} btnType={'classic'}/>
        <ButtonNya onClick={() => {changeFilter('Low')}} btnName={'Low'} btnType={'classic'}/>
        <ButtonNya onClick={() => {changeFilter('All')}} btnName={'All'} btnType={'classic'}/>
    </div>

    return (
        <div className={s.arr}>
            {listItem}
            {btnFilter}
        </div>)
}

export default Tasks