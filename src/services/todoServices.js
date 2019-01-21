import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://super-todo-app.firebaseio.com/'
});

export default instance;