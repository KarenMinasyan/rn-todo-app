import { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainScreen from './src/screens/MainScreen';
import TodoScreen from './src/screens/TodoScreen';
import Navbar from './src/components/Navbar';

async function loadApplication() {
		await Font.loadAsync({
			'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
			'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
		})
}

export default function App() {
	const [isReady, setIsReady] = useState(false);
	const [todoId, setTodoId] = useState(null);
	const [todos, setTodos] = useState([]);

	const isReadyHandler = () => {
		setIsReady(true)
	}
	
	const addTodo = (title) => {

		setTodos(prev => [
			...prev,
			{
				id: Date.now().toString(),
				title
			}])
	}

	const removeTodo = (id) => {
		const s = todos.find(todo => todo.id === id)

		Alert.alert(
			'Delete Item',
			`Are you sure to delete '${s.title}' ?`,
			[
				{
					text: 'Cancel',
					style: 'cancel'
				},
				{
					text: 'Delete',
					style: 'destructive',
					onPress: () => {
						setTodoId(null)
						setTodos(prev => prev.filter(todo => todo.id !== id))
					}
				}
			],
			{ cancelable: false }
		)
	}

	const updateTodo = (id,  title) => {
		setTodos(prev => prev.map(todo => {
			if(todo.id === id) {
				todo.title = title;
			}

			return todo;
		}))
	}

	const selectedTodo = todos.find(todo => todo.id === todoId)

	const goBack = () => {
		setTodoId(null)
	}

	if(!isReady) {
		return (
			<AppLoading
				startAsync={loadApplication}
				onError={err => console.log(err)}
				onFinish={isReadyHandler}
			/>
		)
	}

	return (
		<View>
			<Navbar title='Todo App!' />
			<View style={styles.container}>
				{
					todoId ? (
						<TodoScreen
							todo={selectedTodo}
							onRemove={removeTodo}
							goBack={goBack}
							onSave={updateTodo}
						/>
						)
						: (
							<MainScreen
							todos={todos}
							addTodo={addTodo}
							removeTodo={removeTodo}
							openTodo={setTodoId}
						/>
						)
				}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20
	},
});
