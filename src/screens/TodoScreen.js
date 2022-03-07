import {View, StyleSheet, Text, Button} from 'react-native';
import {THEME} from '../helpers/constants';
import AppCard from "../components/ui/AppCard";

const {DANGER_COLOR, GRAY_COLOR} = THEME;

const TodoScreen = ({goBack, todo, onRemove}) => {
	return (
		<View>
			<AppCard style={styles.card}>
				<Text style={styles.title}>{todo.title}</Text>
				<Button title='edit' />
			</AppCard>
			<View style={styles.buttons}>
				<View style={styles.button}>
					<Button
						title='back'
						color={GRAY_COLOR}
						onPress={goBack}
					/>
				</View>
				<View style={styles.button}>
					<Button
						title='delete'
						color={DANGER_COLOR}
						onPress={() => onRemove(todo.id)}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	card: {
		marginBottom: 20,
		padding: 15
	},
	button: {
		width: '40%'
	},
	title: {
		fontSize: 20
	}
})

export default TodoScreen;
