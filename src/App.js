import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
          playerArr:['Herc','Daniel','Megan','Vanessa','Kat','Jordan','Ben','Corey','Darnel','Greg','Mike','Ange'],
          winnerArr:['Ben','Jordan'],
          player1: "",
          player2: ""
        }
    }

    getPlayer =()=>{
      let arr = this.state.playerArr;
      let player = arr.pop();
      this.setState({playerArr:arr});
      console.log(arr);
      return player;
    }

componentDidMount(){
  let popPlayer1 =  this.getPlayer()
  let popPlayer2 =  this.getPlayer()
  this.setState({
    player1:popPlayer1,
    player2: popPlayer2
  })
  }

    render(){
      // put js here


        return(
            <div>
              {this.state.player1} VS {this.state.player2}
            </div>

        )
    }
}



export default App;
