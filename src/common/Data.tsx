import React, {useState} from "react";
import moment from "moment";
import {ButtonNya} from "./MyButton";

export function Data() {
    const [date, setDate] = useState(moment().format('LTS'))
    const [timerId, setTimerId]: any = useState(moment().format('LTS'));
    let onClickStart = () => {
        clearInterval(timerId)
        const timer_id = setInterval(() => setDate(moment().format('LTS')), 1000);
        setTimerId(timer_id);
    }
    let onClickStop = () => clearInterval(timerId)

    return (
        <div>
            {date}
            <div>
                <ButtonNya btnName={'go'} btnType={'classic'} onClick={onClickStart}/>
                <ButtonNya btnName={'stop'} btnType={'error'} onClick={onClickStop}/>
            </div>
        </div>
    )
}

