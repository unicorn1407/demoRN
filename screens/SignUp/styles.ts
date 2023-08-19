import { Colors } from "constants/colors";
import { HEIGHT, HEIGHT_RATIO, WIDTH, WIDTH_RATIO } from "constants/commons";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    errorText: {
        fontFamily: 'Lato',
        fontWeight: '400',
        paddingTop: 12 * HEIGHT_RATIO,
        paddingLeft: 24 * WIDTH_RATIO,
        fontSize: 12 * HEIGHT_RATIO,
        color: Colors.RED,
    },
    doneIcon: {
        height: 54 * HEIGHT_RATIO,
        width: 54 * WIDTH_RATIO
    },
    continueRow: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 26,
        paddingRight: 24,
        paddingTop: 50,
        paddingBottom: 20
    },
    signUpText: {
        paddingLeft: 8 * WIDTH_RATIO,
        fontSize: 16 * HEIGHT_RATIO,
        fontFamily: 'Lato',
        color: 'white'
    },
    complexTextContainer: {
        paddingTop: 29 * HEIGHT_RATIO,
        paddingLeft: 24 * WIDTH_RATIO,
        paddingRight: 40 * WIDTH_RATIO
    },
    weakText: {
        fontFamily: 'Lato',
        fontSize: 12 * HEIGHT_RATIO,
        fontWeight: '500',
        color: Colors.GRAY
    },
    highlightText: {
        fontFamily: 'Lato',
        fontSize: 12 * HEIGHT_RATIO,
        fontWeight: '500',
        color: Colors.BLUE
    },
    agreeRow: {
        flexDirection: 'row',
        paddingLeft: 24 * WIDTH_RATIO,
        paddingTop: 23 * HEIGHT_RATIO,
        alignItems: 'center'
    },
    checkbox: {
        height: 23 * HEIGHT_RATIO,
        width: 23 * WIDTH_RATIO
    },
    getStarted: {
        paddingBottom: 41 * HEIGHT_RATIO,
        paddingHorizontal: 24 * WIDTH_RATIO,
        fontSize: 22 * HEIGHT_RATIO,
        fontFamily: 'Lato',
        color: 'white'
    },
    over16Text: {
        paddingLeft: 8 * WIDTH_RATIO,
        fontSize: 14 * HEIGHT_RATIO,
        fontFamily: 'Lato',
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    inputContainer: {
        marginHorizontal: 24 * WIDTH_RATIO,
        marginBottom: 26 * HEIGHT_RATIO
    },
    backgroundImage: {
        position: 'absolute',
        width: WIDTH,
        height: HEIGHT,
    },
})

export default styles;