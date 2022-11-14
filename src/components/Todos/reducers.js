const todos = (state = {} , action) => {

    switch(action.type) {
        case 'FETCH_TODOS_SUCCESS':
            console.log('In reducers: ' + JSON.stringify(action.payload.todos))
            return {data: action.payload.todos}
        default:
            return state
    }
}

export default todos
