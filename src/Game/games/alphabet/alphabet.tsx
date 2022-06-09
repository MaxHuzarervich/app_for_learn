import React from "react";
import './alphabetStyle.css';
import {ButtonBack} from "../../buttonBack/buttonBack";
import useSound from "use-sound";
import soundLetters from "../../../assets/audio/letters/letters.mp3";

export const Alphabet = () => {

    const [play, {stop}] = useSound(soundLetters, {
        sprite: {
            1: [0, 290],
            2: [10800, 290],
            3: [21600, 290],
            4: [32300, 390],
            5: [43200, 330],
            6: [53900, 390],
            7: [64800, 390],
            8: [75400, 490],
            9: [86200, 490],
            10: [97000, 490],
            11: [107700, 750],
            12: [118600, 500],
            13: [129400, 500],
            14: [140200, 500],
            15: [151200, 500],
            16: [161800, 500],
            17: [172600, 500],
            18: [183500, 500],
            19: [194200, 800],
            20: [205000, 500],
            21: [216000, 500],
            22: [226500, 600],
            23: [237200, 750],
            24: [248200, 750],
            25: [259000, 750],
            26: [270000, 750],
            27: [280500, 650],
            28: [291200, 900],
            29: [302200, 480],
            30: [313000, 700],
            31: [323900, 850],
            32: [334500, 620],
            33: [345500, 650],
        }
    })

    return (<div>
            <ButtonBack to={'/game'}/>
            <div className='blockAlphabet'>
                <div><span onMouseEnter={() => play({id: '1'})} onMouseLeave={() => stop()}>А</span></div>
                <div><span onMouseEnter={() => play({id: '2'})} onMouseLeave={() => stop()}>Б</span></div>
                <div><span onMouseEnter={() => play({id: '3'})} onMouseLeave={() => stop()}>В</span></div>
                <div><span onMouseEnter={() => play({id: '4'})} onMouseLeave={() => stop()}>Г</span></div>
                <div><span onMouseEnter={() => play({id: '5'})} onMouseLeave={() => stop()}>Д</span></div>
                <div><span onMouseEnter={() => play({id: '6'})} onMouseLeave={() => stop()}>Е</span></div>
                <div><span onMouseEnter={() => play({id: '7'})} onMouseLeave={() => stop()}>Ё</span></div>
                <div><span onMouseEnter={() => play({id: '8'})} onMouseLeave={() => stop()}>Ж</span></div>
                <div><span onMouseEnter={() => play({id: '9'})} onMouseLeave={() => stop()}>З</span></div>
                <div><span onMouseEnter={() => play({id: '10'})} onMouseLeave={() => stop()}>И</span></div>
                <div><span onMouseEnter={() => play({id: '11'})} onMouseLeave={() => stop()}>Й</span></div>
                <div><span onMouseEnter={() => play({id: '12'})} onMouseLeave={() => stop()}>К</span></div>
                <div><span onMouseEnter={() => play({id: '13'})} onMouseLeave={() => stop()}>Л</span></div>
                <div><span onMouseEnter={() => play({id: '14'})} onMouseLeave={() => stop()}>М</span></div>
                <div><span onMouseEnter={() => play({id: '15'})} onMouseLeave={() => stop()}>Н</span></div>
                <div><span onMouseEnter={() => play({id: '16'})} onMouseLeave={() => stop()}>О</span></div>
                <div><span onMouseEnter={() => play({id: '17'})} onMouseLeave={() => stop()}>П</span></div>
                <div><span onMouseEnter={() => play({id: '18'})} onMouseLeave={() => stop()}>Р</span></div>
                <div><span onMouseEnter={() => play({id: '19'})} onMouseLeave={() => stop()}>С</span></div>
                <div><span onMouseEnter={() => play({id: '20'})} onMouseLeave={() => stop()}>Т</span></div>
                <div><span onMouseEnter={() => play({id: '21'})} onMouseLeave={() => stop()}>У</span></div>
                <div><span onMouseEnter={() => play({id: '22'})} onMouseLeave={() => stop()}>Ф</span></div>
                <div><span onMouseEnter={() => play({id: '23'})} onMouseLeave={() => stop()}>Х</span></div>
                <div><span onMouseEnter={() => play({id: '24'})} onMouseLeave={() => stop()}>Ц</span></div>
                <div><span onMouseEnter={() => play({id: '25'})} onMouseLeave={() => stop()}>Ч</span></div>
                <div><span onMouseEnter={() => play({id: '26'})} onMouseLeave={() => stop()}>Ш</span></div>
                <div><span onMouseEnter={() => play({id: '27'})} onMouseLeave={() => stop()}>Щ</span></div>
                <div><span onMouseEnter={() => play({id: '28'})} onMouseLeave={() => stop()}>Ъ</span></div>
                <div><span onMouseEnter={() => play({id: '29'})} onMouseLeave={() => stop()}>Ы</span></div>
                <div><span onMouseEnter={() => play({id: '30'})} onMouseLeave={() => stop()}>Ь</span></div>
                <div><span onMouseEnter={() => play({id: '31'})} onMouseLeave={() => stop()}>Э</span></div>
                <div><span onMouseEnter={() => play({id: '32'})} onMouseLeave={() => stop()}>Ю</span></div>
                <div><span onMouseEnter={() => play({id: '33'})} onMouseLeave={() => stop()}>Я</span></div>
            </div>
        </div>
    )
}