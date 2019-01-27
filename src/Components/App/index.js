import { connect } from 'react-redux';
import App from './App';
import { addTodo, removeTodo, saveTodo, removeSaveTodo } from '../../Actions/actions';

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
    checked: state.checked
  }
}

export default connect(mapStateToProps, { addTodo , removeTodo, saveTodo, removeSaveTodo })(App);