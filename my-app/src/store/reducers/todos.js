const todosReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [ ...state,
          { id: action.id,text: action.text,isDone: false}
        ]
      case 'TOGGLE_TODO':
        return state.map(todo => todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo)
      
      case 'DELETE_TODO': 
        return state.list.filter((todo) => todo.id !== id)
              
    default:
        return state
    }
  }
  
  export default todosReducer