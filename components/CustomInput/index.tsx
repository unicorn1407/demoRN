import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Pressable, Text, TextInput, TextInputProps, TouchableOpacity, View, ViewStyle } from "react-native";
import { CustomInputType, PasswordStrength } from "constants/type";
import { HEIGHT_RATIO, PASSWORD_MASK } from "constants/commons";
import { PasswordColorEntry, PasswordColors } from "constants/colors";
import MaskInput from 'react-native-mask-input';
import { Image } from "expo-image";
import { ICON_EYE, ICON_EYE_SLASH } from "constants/image";
import { getPasswordStrength } from "helpers/password";
import { isEmpty } from "lodash";
import styles from "./styles";

interface CustomInputProps extends TextInputProps {
    inputType: CustomInputType;
    inputContainerStyle: ViewStyle;
    showErrorText?: boolean;
    errorText?: string;
    label: string;
}

const CustomInput = forwardRef((props: CustomInputProps, ref) => {

    const inputRef = useRef<TextInput>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [showObf, setShowObf] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>();
    const [colorFillData, setColorFillData] = useState<PasswordColorEntry>();

    useEffect(() => {

        if (props?.inputType === CustomInputType.PASSWORD && props?.value) {
            const strength = getPasswordStrength(props?.value)
            const colorData = PasswordColors[strength]
            if (colorData) {
                setPasswordStrength(strength)
                setColorFillData([...colorData])
            }
        }
    }, [props?.value])

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current?.focus();
        },
        blur: () => {
            inputRef.current?.blur();
        }
    }));

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const handlePress = () => {
        inputRef.current?.focus();
    };

    const onToggleObf = () => {
        setShowObf(!showObf)
    }


    const renderByInputType = () => {
        if (props.inputType === CustomInputType.PASSWORD) {
            return (
                <MaskInput
                    {...props}
                    showObfuscatedValue={showObf}
                    obfuscationCharacter="*"
                    mask={PASSWORD_MASK}
                    value={props?.value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    autoCapitalize='none'
                    ref={inputRef}
                    style={[styles.text, props.style]}
                    onChangeText={props?.onChangeText}
                />
            )
        }
        return (
            <TextInput
                {...props}
                value={props?.value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                autoCapitalize='none'
                ref={inputRef}
                style={[styles.text, props.style]}
                onChangeText={props?.onChangeText}>
            </TextInput>
        )
    }

    const renderBottomLine = () => {

        if (props.inputType === CustomInputType.PASSWORD && props?.value?.length && colorFillData) {

            const leftColor = colorFillData[0];
            const rightColor = colorFillData[1];
            const leftFlex = colorFillData[2];
            const rightFlex = colorFillData[3];
            return (
                <View style={styles.bottomLinePassword}>
                    <View style={{ backgroundColor: leftColor, flex: leftFlex }} />
                    <View style={{ backgroundColor: rightColor, flex: rightFlex }} />
                </View>
            )
        }
        return (
            <View style={styles.bottomLine} />
        )
    }

    const renderError = () => {
        if (props.inputType === CustomInputType.PASSWORD) {

            return (
                (!!props?.errorText && props?.showErrorText && !props?.value) ? (
                    <Text style={styles.error}>{props?.errorText}</Text>
                ) : (
                    <Text style={[styles.error, { color: colorFillData?.[0] }]}>{passwordStrength}</Text>
                )
            )
        }
        return (
            !!props?.showErrorText && !!props?.errorText && <Text style={styles.error}>{props?.errorText}</Text>
        )
    }

    return (
        <Pressable onPress={handlePress} style={[styles.inputContainer, props.inputContainerStyle]}>
            <View style={styles.inputField}>
                {renderByInputType()}
                <Text style={[styles.label, { top: !isFocused && !props?.value ? 0 : -15 * HEIGHT_RATIO }]}>
                    {props?.label}
                </Text>
                {props?.inputType === CustomInputType.PASSWORD && <View style={styles.rightIcon}>
                    <TouchableOpacity hitSlop={20} onPress={onToggleObf} >
                        <Image
                            style={styles.eyeImage}
                            source={showObf ? ICON_EYE : ICON_EYE_SLASH}
                            contentFit="contain" />
                    </TouchableOpacity>
                </View>}
            </View >
            {renderBottomLine()}
            {renderError()}

        </Pressable>
    );
})

export default CustomInput