import React from 'react'

export default function Hand (props) {

const cardArray=[10,11,5,6,13];


    return (
        <>
            <h1>first hand</h1>
          <div>
           {cardArray.map(card => <div>{card}</div>)}
          </div>
        </>
    )
}

