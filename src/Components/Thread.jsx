import React from 'react'
import { TwitterTimelineEmbed } from "react-twitter-embed";
// import Contact from './Contact';
// import logoBlack from '../logoBlack.svg';
import NavBar2 from './NavBar2';


const Thread = () => {
    return (
        <>
         <NavBar2  contact = 'other-pages' links = 'link'/>
            <>
            <div className='Tweets'>
            <br></br><br></br>
                <div className="centerContent">
                    <div className="selfCenter standardWidth">
                        <TwitterTimelineEmbed sourceType="collection"
                            id="1205542982310596608"
                            options={{ height: 1400, width: 400 }} />
                    </div>
                </div>
            </div>
            </>
        </>
    )
}

export default Thread;