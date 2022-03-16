import  { View, StyleSheet, Platform } from 'react-native';
import AppTextBold from './ui/AppTextBold';
import { THEME } from '../helpers/constants';

const { MAIN_COLOR, TEXT_COLOR } = THEME;

const Navbar = ({ title }) => {
		return (
			<View style={{
				...styles.navbar,
				...Platform.select({
					ios: styles.navbarIos,
					android: styles.navbarAndroid
				})
			}}
			>
					<AppTextBold style={styles.text}
					>{title}</AppTextBold>
			</View>
		)
}

const styles = StyleSheet.create({
		navbar: {
			height: 70,
			alignItems: 'center',
			justifyContent: 'flex-end',
			paddingBottom: 10
		},
	  navbarAndroid: {
			backgroundColor: MAIN_COLOR,
		},
	  navbarIos: {
			borderBottomColor: MAIN_COLOR,
			borderBottomWidth: 1
		},
		text: {
			color: Platform.OS === 'ios' ? MAIN_COLOR : TEXT_COLOR,
			fontSize: 20
		}
})

export default Navbar;

