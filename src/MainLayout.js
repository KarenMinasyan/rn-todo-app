import React, {useContext} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Navbar from "./components/Navbar";
import {THEME} from "./helpers/constants";
import TodoScreen from "./screens/TodoScreen";
import MainScreen from "./screens/MainScreen";
import {ScreenContext} from "./context/screen/screenContext";

const { PADDING_HORIZONTAL } = THEME;

const MainLayout = () => {
	const {todoId} = useContext(ScreenContext)

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


