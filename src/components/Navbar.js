import  { View, StyleSheet } from 'react-native';
import AppTextBold from "./ui/AppTextBold";
import { THEME } from "../helpers/constants";

const {MAIN_COLOR} = THEME;

const Navbar = ({ title }) => {
		return (
			<View style={styles.navbar}>
					<AppTextBold style={styles.text}>{title}</AppTextBold>
			</View>
		)
}

const styles = StyleSheet.create({
		navbar: {
			height: 70,
				alignItems: 'center',
				justifyContent: 'flex-end',
				backgroundColor: MAIN_COLOR,
				paddingBottom: 10
		},
		text: {
			color: 'white',
				fontSize: 20
		}
})

export default Navbar;

