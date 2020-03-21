import React from 'react'
import '../CSS/Button.css';

const Button = (props) => {
    return (
        <>
            <label className="switch" >
                <input type="checkbox"  onChange= {props.handleSwitch}/>
                <span className="slider round"></span>
            </label>
        </>
    )
}
export default Button;