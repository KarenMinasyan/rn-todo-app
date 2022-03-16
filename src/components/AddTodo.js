import { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { THEME } from '../helpers/constants';

const {MAIN_COLOR} = THEME;

const AddTodo = ({ onSubmit }) => {
	const [value, setValue] = useState('');

	const pressHandler = () => {
		if(value.trim()) {
			onSubmit(value)
			setValue('')
			Keyboard.dismiss()
		} else {
			Alert.alert('name todo do not be empty')
		}
	}

	return (
		<View style={styles.block}>
			<TextInput
				style={styles.input}
				onChangeText={setValue}
				value={value}
				placeholder='write todo name...'
				// autoCorrect={false}
				// autoCapitalize='none'
				// keyboardType='number-pad'
			/>
			<AntDesign.Button
				onPress={pressHandler}
				name='pluscircleo'
			>
					Add
			</AntDesign.Button>
			{/*<Button title='Add' onPress={pressHandler} />*/}
		</View>
	)
}

const styles = StyleSheet.create({
	block: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15
	},
	input: {
		width: '60%',
		padding: 10,
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderColor: MAIN_COLOR
	}
})

export default AddTodo;
