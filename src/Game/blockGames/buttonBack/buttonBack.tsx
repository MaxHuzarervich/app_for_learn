import React from "react";
import {NavLink} from "react-router-dom";
import './buttonBackStyle.css'

export const ButtonBack = () => {
    return (
        <div>
            <NavLink to='/' className='back'>
                <div>BACK</div>
            </NavLink>
        </div>
    )
}