import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import {THEME} from "../../helpers/constants";

const { MAIN_COLOR } = THEME

const AppLoader = () => (
	<View style={styles.center}>
		<ActivityIndicator size='large' color={MAIN_COLOR} />
	</View>
)

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default AppLoader;
