import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
	text: {
		fontSize: 50,
		marginBottom: 0
	},
	buttonContainer: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'pink'
	},
	buttonContainerReverse: {
		transform: [{ rotate: '180deg' }],
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'lightblue'
	}
});
