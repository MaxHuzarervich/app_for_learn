import React, {ChangeEvent, useState} from "react";
import {ButtonBack} from "../../buttonBack/buttonBack";
import './plus&minus.css'

export const PlusMinus = () => {

    const [num, setNum] = useState('')
    const [num2, setNum2] = useState('')
    const [num3, setNum3] = useState('')
    const [num4, setNum4] = useState('')

    const handler = (e: ChangeEvent<HTMLInputElement>) => {
        setNum(e.currentTarget.value)
    }
    const handler2 = (e: ChangeEvent<HTMLInputElement>) => {
        setNum2(e.currentTarget.value)
    }
    const handler3 = (e: ChangeEvent<HTMLInputElement>) => {
        setNum3(e.currentTarget.value)
    }
    const handler4 = (e: ChangeEvent<HTMLInputElement>) => {
        setNum4(e.currentTarget.value)
    }

    return (
        <div>
            <ButtonBack to={'/game'}/>
            <div className='plusMinusGame'>
                <div>
                    <input onChange={handler} value={num}/>
                    <span>+</span>
                    <input onChange={handler2} value={num2}/>
                    <span>=</span>
                    {parseFloat(num) + parseFloat(num2)}
                </div>
                <div>
                    <input onChange={handler3} value={num3}/>
                    <span>-</span>
                    <input onChange={handler4} value={num4}/>
                    <span>=</span>
                    {parseFloat(num3) - parseFloat(num4)}
                </div>
            </div>
        </div>
    )
}