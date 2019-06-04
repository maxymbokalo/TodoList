import {types,actions} from '../actions/todo';

const initialState = { 
    todos: [],
};

export default function todo_reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        todos: [
            ...state.todos,
            action.payload
        ],
      };
    case types.UPDATE_TODO:    
        let todos = [...state.todos];
        let indexOfUpdate = todos.findIndex((todo) =>{
            return todo.id == action.payload.id;
        });        
        todos[indexOfUpdate] = action.payload;        
        return {
            ...state,
            todos: todos,
        }
    case types.DELETE_TODO:
        return {
            todos: state.todos.filter(function(todo) {
                return todo.id != action.payload.id;
            })
        }
    case types.SUCCSES_FETCH:
        return {
            todos: [
                ...action.payload
            ],
          };
    default:
      return state;
  }
}

export function addTodo(todo) {    
    return {
        type: types.ADD_TODO,
        payload: todo
    };
}

export function updateTodo(todo){
    return {
        type: types.UPDATE_TODO,        
        payload: todo
    }
}

export function deleteTodo(todo){
    return {
        type: types.DELETE_TODO,
        payload: todo       
    }
}