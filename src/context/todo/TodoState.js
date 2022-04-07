import React, { useContext, useReducer } from 'react';
import { Alert } from 'react-native'
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import {ADD_TODO, CLEAR_ERROR, HIDE_LOADER, REMOVE_TODO, SHOW_ERROR, SHOW_LOADER, UPDATE_TODO} from '../types';
import { useScreenData } from '../screen/ScreenState';

const TodoState = ({ children }) => {
	const initialState = {
		todos: [],
		loading: false,
		error: null
	}
	const { changeScreen } = useScreenData()
	const [state, dispatch] = useReducer(todoReducer, initialState);

	const addTodo = async title => {
		const response = await fetch(
			'https://rn-todo-app-b7d58-default-rtdb.firebaseio.com/todos.json', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ title })
		})
		const data = await response.json()
		//console.log('data', data)
		dispatch({type: ADD_TODO, title, id: data.name })
	}

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

	const showLoader = () => dispatch({ type: SHOW_LOADER })

	const hideLoader = () => dispatch({ type: HIDE_LOADER })

	const showError = error => dispatch({ type: SHOW_ERROR, error })

	const clearError = () => dispatch({ type: CLEAR_ERROR })

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
