import React, { Component } from 'react';
import './App.css';
import List from '../components/list'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOne: [""],
      listTwo: [""],
    }
    this.changeListOne = this.changeListOne.bind(this);
    this.changeListTwo = this.changeListTwo.bind(this);
  }

  changeListOne(text, index) {
    let arr = this.state.listOne;
    if(arr.length === index + 1){
    arr.push("")
    }
    arr[index] = text;
    this.setState({listOne: arr})
    for(let i = 0; i < arr.length-1; i++) {
      if(arr[i] === "") {
        arr.splice(i,1);
        i--;
      }
    this.setState({listOne: arr})      
    }
  }

  changeListTwo(text, index) {
    let arr = this.state.listTwo;
    if(arr.length === index + 1){
    arr.push("")
    }
    arr[index] = text;
    this.setState({listTwo: arr})
    for(let i = 0; i < arr.length-1; i++) {
      if(arr[i] === "") {
        arr.splice(i,1);
        i--;
      }
    this.setState({listTwo: arr})      
    }
  }

  forListOneComponent() {
    return (
        (value,key) =>
           <List 
                key={key}
                index={key}
                value={value}
                changeList={this.changeListOne}
                />
      )
  }

  forListTwoComponent() {
    return (
        (value,key) =>
           <List 
                key={key}
                index={key}
                value={value}
                changeList={this.changeListTwo}
                />
      )
  }

  render() {
    return (
      <div className='Container'>
        <div className='App'>  
            <h2 className='Title'>Should I eat at McDonalds?</h2>
        </div>
        <div className='ProsCons'>
            <div className='Pros'>PROS</div>
            <div className='Cons'>CONS</div>
        </div>
        <div className='OneTwo'>
            <div className='One'>{this.state.listOne.map(this.forListOneComponent())}</div>           
            <div className='Two'>{this.state.listTwo.map(this.forListTwoComponent())}</div>
        </div>
        </div>
      
      );
    }
  }

export default App;
