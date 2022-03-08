import {useState} from 'react';
import {
	View,
	StyleSheet,
	Button,
	Modal,
	TextInput,
	Alert
} from 'react-native';
import { THEME } from '../helpers/constants';

const { MAIN_COLOR, DANGER_COLOR } = THEME;

const EditModal = ({ visible, onCancel, value, onSave }) => {
	const [title, setTitle] = useState(value);

	const saveHandler = () => {
		if (title.trim().length < 3) {
			Alert.alert(
				'Error!',
				`Min length size 3 symbol.How is ${title.trim().length} symbol`
			)
		} else {
			onSave(title)
		}
	}

	return (
		<Modal
			visible={visible}
			animationType='slide'
			transparent={false}
		>
			<View style={styles.wrap}>
				<TextInput
					value={title}
					onChangeText={setTitle}
					style={styles.input}
					placeholder='write something'
					autoCapitalize='none'
					autoCorrect={false}
					maxLength={64}
				/>
				<View style={styles.buttons}>
					<Button
						title='Cancel'
						color={DANGER_COLOR}
						onPress={onCancel}
					/>
					<Button
						title='Save'
						onPress={saveHandler}
					/>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		padding: 10,
		borderBottomColor: MAIN_COLOR,
		borderBottomWidth: 2,
		width: '80%'
	},
	buttons: {
		width: '100%',
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
})

export default EditModal;
