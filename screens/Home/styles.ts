import { Colors } from "constants/colors";
import { HEIGHT, HEIGHT_RATIO, WIDTH, WIDTH_RATIO } from "constants/commons";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    categoryContainer: {
        
            height: 71 * HEIGHT_RATIO,
            backgroundColor: Colors.BLACK,
            borderColor: Colors.GRAY_BORDER,
            borderWidth: 1,

            width: 109 * WIDTH_RATIO,
            borderRadius: 8,
            marginHorizontal: 4,
            alignItems: 'center',
            justifyContent: 'center'
        
    },
    errorText: {
        fontFamily: 'Lato',
        fontWeight: '400',
        paddingTop: 12 * HEIGHT_RATIO,
        paddingLeft: 24 * WIDTH_RATIO,
        fontSize: 12 * HEIGHT_RATIO,
        color: Colors.RED,
    },
    categoryLabel: {
        alignSelf: 'center',
        fontSize: 14 * HEIGHT_RATIO,
        fontWeight: '400',
        fontFamily: 'Lato',
        color: 'white'
    },
    doneBtn: {
        fontSize: 14 * HEIGHT_RATIO,
        fontWeight: '400',
        fontFamily: 'Lato',
        color: 'white'
    },
    welcome: {
        paddingTop: 192 * HEIGHT_RATIO,
        paddingBottom: 41 * HEIGHT_RATIO,
        paddingHorizontal: 16 * WIDTH_RATIO,
        fontSize: 22 * HEIGHT_RATIO,
        fontFamily: 'Lato',
        color: 'white'
    },
    pleaseSelectCat: {
        paddingBottom: 20 * HEIGHT_RATIO,
        paddingLeft: 8 * WIDTH_RATIO,
        fontSize: 14 * HEIGHT_RATIO,
        fontFamily: 'Lato',
        fontWeight: '400',
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