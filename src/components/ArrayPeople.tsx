import React, {useState} from "react";
import {CheckArrayAC, hwReducer, SortArrayDownAC, SortArrayUpAC} from "./homeWorkReducer";
import {ButtonNya} from "../common/MyButton";




export const ArrayPeople = () => {
    const [people, setPeople]= useState([
        {id: '1', name: 'Flex', age: 2},
        {id: '2', name: 'Maks', age: 29},
        {id: '3', name: 'Anna', age: 23},
        {id: '4', name: 'Dima', age: 22}
    ])


    return (
        <div>
            <div>{people.map(a => <div>{a.name}</div>)}</div>
            <ButtonNya
                btnType={'classic'}
                btnName={'Up'}
                onClick={() => {
                    let newPeople = hwReducer(people, SortArrayUpAC())
                    setPeople(newPeople)
                    console.log(newPeople)}
                }

            />
            <ButtonNya
                btnType={'classic'}
                btnName={'Down'}
                onClick={() => setPeople(hwReducer(people, SortArrayDownAC()))}
            />
            <ButtonNya
                btnType={'classic'}
                btnName={'18+'}
                onClick={() => setPeople(hwReducer(people, CheckArrayAC()))}
            />
        </div>

        )
}