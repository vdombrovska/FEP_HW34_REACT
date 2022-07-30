export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: Date.now(),
    title
});

export const deleteTodo = () => ({
    type: 'DELETE_TODO',
});

 export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    isDone: false ,
    id: id,
}) ;