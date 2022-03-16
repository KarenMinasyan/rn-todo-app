import { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import AppCard from '../components/ui/AppCard';
import AppTextBold from '../components/ui/AppTextBold';
import AppButton from '../components/ui/AppButton';
import EditModal from '../components/EditModal';
import { THEME } from '../helpers/constants';

const { DANGER_COLOR, GRAY_COLOR, TEXT_COLOR } = THEME;

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
				<AppButton onPress={() => setModal(true)}>
					<FontAwesome name='edit' size={20} />
				</AppButton>
			</AppCard>
			<View style={styles.buttons}>
				<View style={styles.button}>
					<AppButton
						color={GRAY_COLOR}
						onPress={goBack}
					>
						<AntDesign
							name='back'
							size={20}
							color={TEXT_COLOR}
						/>
					</AppButton>
				</View>
				<View style={styles.button}>
					<AppButton
						color={DANGER_COLOR}
						onPress={() => onRemove(id)}
					>
						<FontAwesome name='remove' size={20} />
					</AppButton>
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
		//width: Dimensions.get('window').width / 3
    width: Dimensions.get('window').width > 400 ? 150 : 100
	},
	title: {
		fontSize: 20
	}
})

export default TodoScreen;
