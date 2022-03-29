import { useContext, useEffect, useState } from 'react';
import {
	View,
	StyleSheet,
	FlatList,
	Image,
	Dimensions
} from 'react-native';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';
import { useScreenData } from '../context/screen/ScreenState';
import { useTodoData}  from '../context/todo/TodoState';
import { THEME } from '../helpers/constants';

const { PADDING_HORIZONTAL } = THEME;

const MainScreen = () => {
	const { addTodo, todos, removeTodo } = useTodoData()
	const { changeScreen } = useScreenData()
	const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - PADDING_HORIZONTAL * 2);

	useEffect(() => {
		const update = () => {
			setDeviceWidth(Dimensions.get('window').width - PADDING_HORIZONTAL * 2);
		}

		Dimensions.addEventListener('change', update);

		return () => {
			Dimensions.removeEventListener('change', update);
		}

	}, [])

	return (
		<View>
			<AddTodo onSubmit={addTodo} />

			{
				todos.length ? (
			  <View style={{ width: deviceWidth }}>
					<FlatList
						keyExtractor={item => item.id.toString()}
						data={todos}
						renderItem={({item}) => (<Todo
							todo={item}
							onRemove={removeTodo}
							onOpen={changeScreen}
						/>)}
					/>
				</View>
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
