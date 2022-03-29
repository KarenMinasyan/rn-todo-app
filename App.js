import { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import TodoState from "./src/context/todo/TodoState";
import MainLayout from "./src/MainLayout";
import ScreenState from "./src/context/screen/ScreenState";

async function loadApplication() {
		await Font.loadAsync({
			'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
			'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
		})
}

export default function App() {
	const [isReady, setIsReady] = useState(false);

	const isReadyHandler = () => {
		setIsReady(true)
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
	<ScreenState>
		<TodoState>
			<MainLayout />
		</TodoState>
	</ScreenState>
	);
}
