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
    this.setState({
      todoList: [...this.state.todoList, this.state.name]
    })
  };


  render() {
    return (
      <div className="App">
        <Header />
        <TextFields
          handleChange={this.handleChange}
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
