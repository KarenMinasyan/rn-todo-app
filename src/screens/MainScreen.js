import { View, StyleSheet, FlatList, Image } from 'react-native';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';

const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
	return (
		<View>
			<AddTodo onSubmit={addTodo} />

			{
				todos.length ? (
				<FlatList
					keyExtractor={item => item.id.toString()}
					data={todos}
					renderItem={({item}) => (<Todo
						todo={item}
						onRemove={removeTodo}
						onOpen={openTodo}
					/>)}
				/>
				) :
				(
					<View style={styles.imgWrap}>
						<Image
							style={styles.image}
							source={require('../../assets/no-items.png')}
						/>
					{/*<Image*/}
					{/*	style={styles.image}*/}
					{/*	source={{*/}
					{/*		uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'*/}
					{/*	}}*/}
					{/*/>*/}
				</View>
				)
			}
		</View>
	)
}

const styles = StyleSheet.create({
	imgWrap: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		height: 300
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	}
})

export default MainScreen;
