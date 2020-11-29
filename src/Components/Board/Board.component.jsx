  
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


//map(card => new Array(5).push(card))


 function InitBoardData(register1,p1,p2){
     this.register=register1;
     
    this.player1 = p1.map(card => ([[card],[],[],[],[]]));
    this.player2 = p2.map(card => ([[card],[],[],[],[]]));
     return this;
 }


//#region shuffle the card
 const shuffle = (list) => list.sort(() => Math.random() - 0.5);
 //#endregion


 //#region 42 card to register, 5 to player1 and 5 to player 2 
 /*/generates object = {
                        register : [{Value: '9', Suit: '♦'}, {Value: 'Q', Suit: '♣'},...], 
                        player1 : [[{Card},...],[],[],...[]], //5 hands
                        player2 : [[{Card},...],[],[],...[]] //5 hands
                       }
 */
 const InitBoard= () => {

     const myPack = CardPack();

     shuffle(myPack);

     const registerCardArr=[];

     const player1CardsArr=[];

     const player2CardsArr=[];

     //give register 42 cards

    for (let i =0; i < 42 ; i++) {
        registerCardArr.push(myPack.pop());
    }

     //give player 1 - 5

     for (let i =0; i < 5 ; i++) {
        player1CardsArr.push(myPack.pop());
    }

     //give player 2 - 5
     for (let i =0; i < 5 ; i++) {
        player2CardsArr.push(myPack.pop());
    }

    return new InitBoardData(registerCardArr,player1CardsArr,player2CardsArr);
 }
//#endregion




 //#region generate 52 card pack
 function CardPack(){
    
    //generate 52 cards
    
    var suits = ['♠', '♥', '♦', '♣'];    
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


    var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < values.length; x++)
		{
			var card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
 }

 //#endregion



    //shuffle these 52 cards

    //return [{CardNumber:__, CardType:__},{...}]



 
 
const BoardComponent = (props)  => {

console.log(InitBoard());

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