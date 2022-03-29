import React from 'react';
import { View, StyleSheet } from 'react-native';
import TodoScreen from './screens/TodoScreen';
import MainScreen from './screens/MainScreen';
import Navbar from './components/Navbar';
import { useScreenData } from './context/screen/ScreenState';
import { THEME } from './helpers/constants';

const { PADDING_HORIZONTAL } = THEME;

const MainLayout = () => {
	const { todoId } = useScreenData()

	return (
		<View>
			<Navbar title='Todo App!' />
			<View style={styles.container}>
				{ todoId ? <TodoScreen /> : <MainScreen /> }
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: PADDING_HORIZONTAL,
		paddingVertical: 20
	},
});

export default MainLayout;


