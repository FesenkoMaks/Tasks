import React from 'react';
import {FirstName} from "./FirstName";
import {LastName} from "./LastName";
import {Messages} from "./Messages";
import Tasks from "./Tasks";
import Input from "./Input";

function OneFour() {
    return (
        <div>
            <FirstName value={"Maks"}/>
            <LastName value={"Fesenko"}/>
            <Messages name={'Vova Putin'} text={"where's the money? where's the money?where's the money?where's the money?мwhere's the money?where's the money?where's the money?where's the money?where's the money?where's the money?where's the money?where's the money?where's the money?where's the money?where's the money?where's the money?"} time={'20:55'}/>
            <Tasks/>
            <Input/>
        </div>
    )
}

export default OneFour;