import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";
import { OPTIONLIMIT } from "../constants/index";

class Indecisionapp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.state = {
      options: props.options,
      selectedOption: undefined
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  }
  modalClose() {
    this.setState(() => ({
      selectedOption: undefined
    }));
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    } else if (this.state.options.length >= OPTIONLIMIT) {
      return "You can't add options more than 5";
    } else {
      this.setState(prevState => ({
        options: prevState.options.concat(option)
      }));
    }
  }
  render() {
    const title = "Indecision";
    const subtitle = "Decide what you want to do next !";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          modalClose={this.modalClose}
        />
      </div>
    );
  }
}
Indecisionapp.defaultProps = {
  options: []
};

export default Indecisionapp;
