import React from 'react';
import BackToTop from "react-back-to-top-button";
import { FaArrowUp } from 'react-icons/fa';

const ArrowToTop = (props) => {
    return (
        <BackToTop /*showOnScrollUp*/
            showAt={100}
            speed={20}
            easing="easeInOutQuint">
            <span><FaArrowUp className= {`BackToTop-${props.page}`} /></span>
        </BackToTop>
    )
}

export default ArrowToTop;