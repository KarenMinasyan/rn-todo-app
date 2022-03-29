import React, { useContext, useReducer } from 'react';
import { Alert } from 'react-native'
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import { useScreenData } from '../screen/ScreenState';

const TodoState = ({ children }) => {
	const initialState = {
		todos: [{id: 1, title: 'learn react native'}]
	}
	const { changeScreen } = useScreenData()
	const [state, dispatch] = useReducer(todoReducer, initialState);

	const addTodo = title => dispatch({type: ADD_TODO, title})

	const removeTodo = id => {
		const todo = state.todos.find(t => t.id === id)
			Alert.alert(
				'Delete Item',
				`Are you sure to delete '${todo.title}' ?`,
				[
					{
						text: 'Cancel',
						style: 'cancel'
					},
					{
						text: 'Delete',
						style: 'destructive',
						onPress: () => {
							changeScreen(null)
							dispatch({type: REMOVE_TODO, id})
						}
					}
				],
				{ cancelable: false }
			)
	}

	const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title})

	return (
		<TodoContext.Provider
			value={{
				todos: state.todos,
				addTodo,
				removeTodo,
				updateTodo
			}}
		>
			{children}
		</TodoContext.Provider>
	)
}


export const useTodoData = () => useContext(TodoContext)

export default TodoState;
