import { TodoModel } from '../../models/TodoModel';
import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [] as TodoModel[]
    },
    reducers: {
        setTodoListData: (state, action) => {
            state.todos = action.payload;
        },
        addTodoToList: (state, action) => {
            state.todos.push(action.payload);
        }
    }

    
})

export const {setTodoListData, addTodoToList} = todoSlice.actions;
export default todoSlice.reducer;


