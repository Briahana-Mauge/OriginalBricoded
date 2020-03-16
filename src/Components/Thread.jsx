import React from 'react'
import { TwitterTimelineEmbed } from "react-twitter-embed";


const Thread = () => {
    return (
        <>
            <div className='Tweets'>

                <div className="centerContent">
                    <div className="selfCenter standardWidth">
                        <TwitterTimelineEmbed sourceType="collection"
                            id="1205542982310596608"
                            options={{ height: 1400, width: 700 }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thread;