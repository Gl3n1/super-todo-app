import React, { Component } from 'react';
import Header from '../Header';
import TextFields from '../TextFields';
import AddListItem from '../AddListItem';
import CheckboxList from '../CheckboxList/';
import RemoveListItem from '../RemoveListItem';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  state = {
    name: ''
  };

  handleChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  addItem = (e) => {
    const { saveTodo, addTodo, todoList } = this.props;
    e.preventDefault();
    const currentItem = this.state.name;

    if(currentItem === "") {
        alert("Need to add a Task!")
        //take the todolist object and return an array of obj values. compare with current name.
    } else if(Object.values(todoList).includes(currentItem)) {
         alert("you can't have the same task twice!")
    } else {
      addTodo(this.state.name);
      saveTodo(this.state.name);
      this.setState({
        name: ''
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
          name={this.state.name}
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
