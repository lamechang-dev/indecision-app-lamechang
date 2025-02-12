import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddone = this.handleAddone.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 1
    };
  }
  componentDidMount() {
    try {
      if (localStorage.getItem("count")) {
        this.setState(() => ({
          count: parseInt(localStorage.getItem("count"))
        }));
      }
    } catch (e) {}
  }
  componentDidUpdate() {
    localStorage.setItem("count", this.state.count);
  }
  handleAddone() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    const num = 0;
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleAddone}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter></Counter>, document.getElementById("app"));
