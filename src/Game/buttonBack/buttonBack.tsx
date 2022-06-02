import React from "react";
import {NavLink} from "react-router-dom";
import './buttonBackStyle.css'
import useSound from "use-sound";
import soundButtonBack from '../../assets/audio/backButtonClick.mp3'

type routeType = {
    to: string
}

export const ButtonBack = (props:routeType) => {

    const [play, {stop}] = useSound(soundButtonBack)

    return (
        <div>
            <NavLink to={props.to}
                     className='back'
                     onMouseEnter={() => play()}
                     onMouseLeave={() => stop()}>
                <div>BACK</div>
            </NavLink>
        </div>
    )
}