import { Dimensions } from "react-native";
import { Mask } from "react-native-mask-input";

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;
export const WIDTH_RATIO = WIDTH / 375
export const HEIGHT_RATIO = HEIGHT / 810

export const MIN_PASSWORD_LENGTH = 6;
export const MAX_PASSWORD_LENGTH = 18;
export const PASSWORD_MASK : Mask = Array.from({ length: MAX_PASSWORD_LENGTH }, () => [/./]);