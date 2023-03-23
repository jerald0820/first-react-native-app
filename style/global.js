import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 5,
        alignItems: "center",
    },

    primaryButton: {
        borderRadius: 15,
        alignItems: "center",
        backgroundColor: "#2B4D66",
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15
    },

    primaryButtonText: {
		color: "#BED8FB"
	},

    headLine: {
        fontSize: 24,
        fontWeight: 700,
        marginBottom: 50
    }
});