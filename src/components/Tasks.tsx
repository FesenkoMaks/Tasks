import React, {useState} from "react";
import s from './Tasks.module.css';



function Tasks() {

    let [arr, setArr] = useState([
        {id: 1, n: "Work", p: "High" },
        {id: 2, n: "Football", p: "Middle" },
        {id: 3, n: "React", p: "High" },
        {id: 4, n: "HTML", p: "low" },
    ])

    function RemuveTask(id:number) {
        let filterTasks = arr.filter(t => t.id != id)
        setArr(filterTasks)
    }

    let [filter, setFilter] = useState<'High' | "Middle" | "Low" | "All">("All")



    if (filter === 'High'){
        arr = arr.filter(t => t.p === 'High')
    }
    if (filter === 'Middle'){
        arr = arr.filter(t => t.p === 'Middle')
    }
    if (filter === 'Low'){
        arr = arr.filter(t => t.p === 'low')
    }
  if (filter === 'All'){
        arr = arr
    }

    function cangeFilder(value: 'High' | "Middle" | "Low" | "All" ) {
        setFilter(value)
    }

    const listItem = arr.map((el) => <li key={el.id.toString()}>{el.n}
            <button onClick={() => {RemuveTask(el.id)}}>x</button></li>)

    const btnFilter = <div className={s.btnFilter}>
        <button onClick={() => {cangeFilder('High')}}>High</button>
        <button onClick={() => {cangeFilder('Middle')}}>Middle</button>
        <button onClick={() => {cangeFilder('Low')}}>Low</button>
        <button onClick={() => {cangeFilder('All')}}>All</button>
    </div>

    return (
        <div className={s.arr}>
            {listItem}
            {btnFilter}
        </div>)
}

export default Tasks