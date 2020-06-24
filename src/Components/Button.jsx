import React from 'react'
import '../CSS/Toggle.css';
import { connect } from 'react-redux';
import {RECEIVE_THEME} from './store/actionTypes';

const Button = (props) => {
    const handleSwitch = (event) => {
       props.switchTheme() 
    }
    return (
        <>
            <label className="switch" >
                <input type="checkbox" onChange={handleSwitch} checked={props.themeState.isThemeChanged}/*{props.checked}*/ />
                <span className="slider round"></span>
            </label>
        </>
    )
}

const mapStateToProps = (state) => {
    return state;
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        switchTheme: () => {
            // console.log('increment called')
            dispatch({
                type: RECEIVE_THEME
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Button)

// const Button = (props) => {
//     console.log(props)
//     return (
//         <>
//             <label className="switch" >
//                 <input type="checkbox" onChange={props.handleSwitch} checked={props.switched}/*{props.checked}*/ />
//                 <span className="slider round"></span>
//             </label>
//         </>
//     )
// }
// export default Button;