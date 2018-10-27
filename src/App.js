import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result:0,
      num1: "",
      num2: "",
    };

    this.setNum = this.setNum.bind(this);
    this.clearNums = this.clearNums.bind(this);
    this.calculate = this.calculate.bind(this);    
  }

  setNum(event) {
    const num_value = event.target.value ? parseInt(event.target.value) : "";  
    this.setState({
      [event.target.name]: num_value,
    }); 
  }

  clearNums() {
    this.setState({
      num1:"",
      num2:"",
      result:0
    });
  }

  calculate(event) {
    const buttonContent = event.target.innerHTML;
    let answer = "";
    switch (buttonContent){
      case "+":
        answer = this.state.num1 + this.state.num2;
        break;
      case "-":
        answer = this.state.num1 - this.state.num2;
        break;
      case "x":
        answer = this.state.num1 * this.state.num2;
        break;
      default:
        answer = "";
    }
    
    this.setState({
      result:answer
    });
  }


  render() {
    // const { num1, num2, name } = this.state;
    const buttonInput = ["+", "-", "x"]
    return (
      <div className="App">
        <header className="App-header">
          <Result
            result={this.state.result}
          />
          <div>
              <FormInput
                onChange={this.setNum}
                name="num1"
                value={this.state.num1}
              />
              <FormInput
                onChange={this.setNum}
                name="num2"
                value={this.state.num2}            
              />
            <Button
              onClick={this.clearNums}
              child="Clear"
            />
          </div>
          <div>
            {buttonInput.map(item =>
                <Button
                  onClick={this.calculate}
                  child={item}
                />
            )}
          </div>  
        </header>
      </div>
    );
  }
}

const FormInput = ({ onChange, name, value }) => {
  return (
      <input
        type="text"
        onChange={onChange}
        name={name}
        value={value}
      /> 
  );
}

const Button = ({ onClick, child }) => {
  return (
    <button
      onClick={onClick}
    >{child}
    </button>
  );
}

const Result = ({ result }) => {
  return (
    <h1>
      {result}
    </h1>
  );
}

export default App;
