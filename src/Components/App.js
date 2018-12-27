import React, { Component } from 'react';
import '../Styles/App.css';
import Header from './Header';
import TextFields from './TextFields';
import FloatingActionButtons from './FloatingActionButtons';
import CheckboxList from './CheckboxList';

class App extends Component {
  state = {
    name: '',
    todoList: [],
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClick = () => {
    if (this.state.todoList[this.state.todoList.length - 1] !== this.state.name) {
      this.setState({
        todoList: [...this.state.todoList, this.state.name],
        name: ''
      })
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todoList[this.state.todoList.length - 1] !== this.state.name) {
      this.setState({
        todoList: [...this.state.todoList, this.state.name],
        name: ''
      })
    }
  };


  render() {
    //Todo: Add Props types
    //Todo: Connect with redux
    return (
      <div className="App">
        <Header />
        <TextFields
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
         />
        <FloatingActionButtons
          handleClick={this.handleClick}
        />
        <CheckboxList
          inputItem={this.state.name}
          todoList={this.state.todoList}
        />
      </div>
    );
  }
}

export default App;
