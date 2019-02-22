import React, { Component } from "react";
import Nav from "./components/Nav";
import cards from "./cards.json";
import Card from "./components/Card";



class App extends Component {
  state = {
    total: 0,
    topScore: 0,
    cards,
    chosen: []
  };


  // changeRandom = (arr) => {
  //   // const array = [1,2,3,4,5,6,7,8,9, 10,11,12]
  //   const array = this.state.options
  //   function index() { return Math.floor(Math.random() * array.length) };
  //   const final = [];
  //   console.log(final)
  //   do {
  //     var i = 0
  //     var newNum = array.splice(index(),1)
  //     final.push(newNum[0])
  //     i++
  //   }while(array.length > 0)

  //     this.setState({
  //       options: final
  //     })
  //   }

  changeRandom = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  
  topScoreChecker = (cur) => {
    if(cur > this.state.topScore) {
      this.setState({  topScore: cur})
    }
  }

  handleChocie = (id) => {
   
   var included = this.state.chosen.includes(id);

    if(included) {
        return (
            alert('You Already Chose This!'),
            this.topScoreChecker(this.state.total),
            this.setState({ total: 0, chosen: []}),
            this.setState.cards = this.changeRandom(this.state.cards) 
        )
    }else {
        return (  
          this.setState({ final: this.state.chosen.push(id), total: this.state.total += 1 }),
          this.setState.cards = this.changeRandom(this.state.cards)
        )
    }
  };

 
  render() {
    return (
      
        <div>
            <Nav total={this.state.total} topScore={this.state.topScore}></Nav>
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                </div>
                <div className="row">
                    {this.state.cards.map(option => (
                        <Card
                        handleChocie={this.handleChocie}
                        id={option.id}
                        key={option.id}
                        name={option.name}
                        image={option.image}
                        />
                    ))}
                 </div>
            </div>
        </div>
    )
  }
}

export default App;