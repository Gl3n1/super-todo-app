import React, { Component } from 'react';
import Header from '../Header';
import TextFields from '../TextFields';
import AddListItem from '../AddListItem';
import CheckboxList from '../CheckboxList';
import RemoveListItem from '../RemoveListItem';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  state = {
    name: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  addItem = (e) => {
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
    }
  };

  removeItem = (e) => {
    e.preventDefault();
    const { removeItem, todoList } = this.props;
    const currentItem = this.state.name;
    const prevItem = todoList[todoList.length-1];

    if(currentItem === "") {
        alert("Need to add a Task!")
    } else if(currentItem === prevItem) {
         alert("you can't have the same task twice!")
    } else {
      // removeItem(this.state.name);
    }
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
              handleClick={this.addItem}
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
