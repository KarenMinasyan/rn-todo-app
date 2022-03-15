import { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import AppCard from '../components/ui/AppCard';
import AppTextBold from "../components/ui/AppTextBold";
import EditModal from '../components/EditModal';
import { THEME } from '../helpers/constants';

const { DANGER_COLOR, GRAY_COLOR } = THEME;

const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
	const [modal, setModal] = useState(false);
	const { title, id } = todo;

	const saveHandler = (title) => {
		onSave(id, title)
		setModal(false)
	}

	return (
		<View>
			<EditModal
				value={title}
				visible={modal}
				onCancel={() => setModal(false)}
				onSave={saveHandler}
			/>

			<AppCard style={styles.card}>
				<AppTextBold style={styles.title}>{title}</AppTextBold>
				<Button
					title='edit'
					onPress={() => setModal(true)}
					color={DANGER_COLOR}
				/>
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
						onPress={() => onRemove(id)}
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
