import React from "react";
import {NavLink} from "react-router-dom";
import useSound from "use-sound";
import soundClickToGame from "../../assets/audio/soundClickToGame.mp3";
import './gameCardStyle.css'

type titleGameType = {
    title: string;
    title2: string;
    title3: string;
    to: string
}

export const GameCard = (props: titleGameType) => {

    const [play, {stop}] = useSound(soundClickToGame)

    return (
        <div className='game'
             onMouseEnter={()=>play()}
             onMouseLeave={()=>stop()}>
            <NavLink to={props.to}
                     className='titleGame'
            >
                <div>
                    <h3>{props.title}<br/>
                        *<br/>
                        {props.title2}<br/>
                        *<br/>
                        {props.title3}
                    </h3>
                </div>
            </NavLink>
        </div>
    )
}