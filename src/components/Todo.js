import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Todo = ({todo, onRemove, onOpen}) => {
	const longPressHandler = () => {
		onRemove(todo.id)
	}

	const openHandler = () => {
		onOpen(todo.id)
	}

	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={openHandler}
			onLongPress={longPressHandler}
		>
			<View style={styles.todo}>
				<Text>{todo.title}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	todo: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 5,
		marginBottom: 10
	}
})

export default Todo;
