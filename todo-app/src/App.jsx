import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    console.log("this",this);
    this.state = {
      isClicked: false,
      text: "",
      toDos: []
    }
  }

  componentDidUpdate () {
    console.log(this.state.toDos)
  }

  handleClick = () => {
    this.setState({
      toDos: [...this.state.toDos,this.state.text],
      text: ""
    })
  }

  changeTheWorld = () => {
    console.log("toggle clicked");
    this.setState({
      isClicked: !this.state.isClicked,
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render () {
    return <div>
      <h2>{this.state.isClicked ? "Hello World": "Bye World"}</h2>
      <p></p>
      <button onClick={this.changeTheWorld}>Toggle The World</button>

      <h2>To Dos</h2>
      <input placeholder="Add To Dos ..." onChange={this.handleChange} value={this.state.text}></input>
      <button onClick={this.handleClick}>Submit</button>
      <p></p>
      <ul>
        {this.state.toDos.map((item,index) => {
          return <li key={`${item}-${index}`}>{item}</li>
          })}
      </ul>
      </div>
  }
} 

export default App;
