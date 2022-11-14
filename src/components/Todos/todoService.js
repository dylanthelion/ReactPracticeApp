import axios from 'axios'

const fetchTodosSuccess = todos => ({
    type: 'FETCH_TODOS_SUCCESS',
    payload: { todos }
})

export const fetchTodos =  () => {
    return async dispatch => {
        try {
            let todos = await axios.get('http://localhost:8081/dbelcher/todos')
            dispatch(fetchTodosSuccess(todos.data))
        }
        catch(e){
            console.log(e)
        }
    }
}
