  
import './Board.styles.scss'
import  Player from '../Player/Player.component'
import  Manager from '../Manager/Manager.component'

//put css grid here to design the board like : 

/**
 * *******************************************************
 * |- - - - -|   ----------------------------------------
 * |         |   --             Player                 --
 * |         |   ----------------------------------------
 * |         |
 * |         |
 * | Manager |
 * |         |
 * |         |
 * |         |    ----------------------------------------
 * |         |    --           Player                   --
 * |- - - - -|    ----------------------------------------
 * *******************************************************
 */

 import React from 'react'
 
const BoardComponent = (props)  => {
     return (
         
            <div className="board-container">
                    <div className="board-manager">
                        <Manager  name="board-manager"/>
                    </div>
                    <div className="first-player"> 
                        <Player  name="player-1"/>
                    </div>
                    <div className="second-player" >
                    <Player name="player-2"/>

                    </div>
             </div>
         
     )
 }
 
 export default BoardComponent;