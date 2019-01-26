import React, { Component } from 'react';
import Header from '../Header';
import TextFields from '../TextFields';
import AddListItem from '../AddListItem';
import CheckboxList from '../CheckboxList/';
import RemoveListItem from '../RemoveListItem';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  state = {
    name: '',
    todoObj: {},
    numberofTodos: 0
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  addItem = (e) => {
    const { saveTodo } = this.props;
    e.preventDefault();
    const { addTodo, todoList } = this.props;
    const currentItem = this.state.name;
    const prevItem = todoList[todoList.length-1];

    if(currentItem === "") {
        alert("Need to add a Task!")
    } else if(currentItem === prevItem) {
         alert("you can't have the same task twice!")
    } else {
      addTodo(this.state.name);
      saveTodo(this.state.name);
      this.setState({
        todoObj: {
          ...this.state.todoObj,
          [this.state.numberofTodos]: this.state.name
        },
        numberofTodos: this.state.numberofTodos + 1
      })
    }
  };

  removeItem = (e) => {
    e.preventDefault();
    const { removeTodo, todoList } = this.props;

    return todoList.length !== 0 ? removeTodo() : alert('nothing to remove!')
  }


  render() {
    //Todo: Add Props types
    //Todo: Refactor with proper component names
    return (
      <div className="App">
        <Header />
        <TextFields
          handleChange={this.handleChange}
          addItem={this.addItem}
         />
         <Grid container spacing={24}>
         <Grid item xs={2}>
            <AddListItem
              addItem={this.addItem}
            />
         </Grid>
         <Grid item xs={2}>
            <RemoveListItem 
              handleClick={this.removeItem}
            />     
            </Grid>       
         </Grid>
        <CheckboxList
          inputItem={this.state.name}
          todoList={this.props.todoList}
        />
      </div>
    );
  }
}

export default App;
