import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class CheckboxList extends React.Component {

  handleToggle = value => () => {
    const { checked, addSelectTodo, removeSelectTodo } = this.props;
    const currentIndex = checked.indexOf(value);
    // const newChecked = [...checked];

    if (currentIndex === -1) {
      // newChecked.push(value);
      addSelectTodo(value);
    } else {
      // newChecked.splice(currentIndex, 1);
      removeSelectTodo(value);
    }
  };

  populateList = () => {
    const { todoList } = this.props;
    const items = [];
    for(let todo in todoList) {
      items.push(
        <ListItem key={todoList[todo]} role={undefined} dense button onClick={this.handleToggle(todoList[todo])}>
          <Checkbox
            checked={this.props.checked.indexOf(todoList[todo]) !== -1}
            tabIndex={-1}
            disableRipple
          />
          <ListItemText 
            primary={`${todo}.`}
            secondary={`${todoList[todo]}`}
          />
        </ListItem>
      )
    }
    return items
  }

  render() {
    const { classes } = this.props;
    return (
      <List className={classes.root}>
        {this.populateList()}
      </List>
    )
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxList);
