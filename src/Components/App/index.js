import { connect } from 'react-redux';
import App from './App';
import { addTodo, removeTodo } from '../../Actions/actions';

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }
}

export default connect(mapStateToProps, { addTodo , removeTodo })(App);