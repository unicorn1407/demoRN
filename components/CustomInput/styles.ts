import { Colors } from "constants/colors";
import { HEIGHT_RATIO, WIDTH_RATIO } from "constants/commons";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rightIcon: { position: 'absolute', right: 0 },
    inputField: { flexGrow: 1, flexDirection: 'row', alignItems: 'center' },
    eyeImage: {
        color: Colors.GRAY,
        width: 19 * WIDTH_RATIO,
        height: 10 * HEIGHT_RATIO
    },
    bottomLine: {
        marginTop: 7 * HEIGHT_RATIO,
        height: 1 * HEIGHT_RATIO,
        backgroundColor: Colors.BLUE
    },
    bottomLinePassword: {
        marginTop: 7 * HEIGHT_RATIO,
        height: 1 * HEIGHT_RATIO,
        flexDirection: 'row',
    },
    error: {
        position: 'absolute',
        right: 0,
        marginTop: 30 * HEIGHT_RATIO,
        fontFamily: 'Lato',
        fontWeight: '400',
        fontSize: 12 * HEIGHT_RATIO,
        color: Colors.RED,
    },
    label: {
        position: 'absolute',
        left: 0,
        fontFamily: 'Lato',
        fontSize: 12 * HEIGHT_RATIO,
        color: Colors.GRAY,
    },
    text: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontFamily: 'Lato',
        fontSize: 16 * HEIGHT_RATIO,
        color: Colors.WHITE
    },
    stars: {
        position: 'absolute',
        top: 10,
        left: 10,
        fontSize: 16,
    },

    inputContainer: {
    },
    input: {
    },
})

export default styles;