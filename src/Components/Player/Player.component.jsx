import './Player.styles.scss'

import React from 'react'

import Hand from '../Hand/Hand.component'

const PlayerComponent = (props) =>{
    

    return (
        <>
            <h1>{props.name} </h1>
            <div>Aldus PageMaker including versions of Lorem Ipsum.</div>
            <div className="hands-wrapper">
                <div className="hand">
                    <Hand/>
                </div>
                <div className="hand">2</div>
                <div className="hand">3</div>
                <div className="hand">4</div>
                <div className="hand">5</div>
            </div>
        </>
    )
}

export default PlayerComponent;