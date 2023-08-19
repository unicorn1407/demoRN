import React, { useEffect, useRef, useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { BG_SIGNUP_GRADIENT, CHECKED, DONE, IMG_BLUR_HASH, UNCHECKED } from "constants/image";
import { CustomInput, Loading } from "components";
import { CustomInputType } from "constants/type";
import { useFormik } from 'formik';
import validationSchema from './validation'
import styles from "./styles";
import { useAppDispatch, useAppSelector } from "hooks";
import { useNavigation } from "@react-navigation/native";
import { SignInActionParams, loginThunk, signupThunk } from "redux/auth/thunk";

interface IFormikSignupValues {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    over16: boolean;
}

const SignUpScreen = () => {
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector((state) => state.auth.isLoading);
    const reduxError = useAppSelector((state) => state.auth.error);
    const [apiError, setApiError] = useState(null);

    useEffect(() => {
        if (reduxError) {
            setApiError(reduxError)
            Alert.alert('Error', reduxError); // Display an alert once
        }
    }, [reduxError])

    const navigation = useNavigation()
    const formik = useFormik<IFormikSignupValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            over16: false,
        },
        validationSchema: validationSchema,

        onSubmit: async (values) => {
            const { firstName, lastName, email, password } = values;
            const signUpResult = await dispatch(signupThunk({ firstName, lastName, email, password }));
            if (!signUpResult?.error) {
                await dispatch(loginThunk({ email, password }));
            }
        }
    });

    const insets = useSafeAreaInsets();

    const firstNameRef = useRef<TextInput>(null);
    const lastNameRef = useRef<TextInput>(null);
    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <>
                <Image
                    style={styles.backgroundImage}
                    source={BG_SIGNUP_GRADIENT}
                    placeholder={IMG_BLUR_HASH}
                    contentFit="cover"
                />

                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Text style={
                        styles.getStarted
                    }>Let's get you started</Text>
                    <CustomInput
                        inputContainerStyle={styles.inputContainer}
                        inputType={CustomInputType.DEFAULT}
                        label={'Your first name'}
                        keyboardType='default'
                        onChangeText={formik.handleChange('firstName')}
                        onBlur={formik.handleBlur('firstName')}
                        value={formik.values.firstName}
                        returnKeyType="next"
                        onSubmitEditing={() => lastNameRef.current?.focus()}
                        errorText={formik?.errors?.firstName}
                        showErrorText={formik?.touched?.firstName}
                    />
                    <CustomInput
                        ref={lastNameRef}
                        inputContainerStyle={styles.inputContainer}
                        inputType={CustomInputType.DEFAULT}
                        label={'Your last name'}
                        onBlur={formik.handleBlur('lastName')}
                        onChangeText={formik.handleChange('lastName')}
                        value={formik.values.lastName}
                        returnKeyType="next"
                        onSubmitEditing={() => emailRef.current?.focus()}
                        errorText={formik?.errors?.lastName}
                        showErrorText={formik?.touched?.lastName && !!formik?.errors?.lastName}
                    />
                    <CustomInput
                        ref={emailRef}
                        inputContainerStyle={styles.inputContainer}
                        inputType={CustomInputType.DEFAULT}
                        label={'Your email'}
                        keyboardType='email-address'
                        onChangeText={formik.handleChange('email')}
                        onBlur={formik.handleBlur('email')}
                        value={formik.values.email}
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current?.focus()}
                        errorText={formik?.errors?.email}
                        showErrorText={formik?.touched?.email} />
                    <CustomInput
                        ref={passwordRef}
                        inputContainerStyle={styles.inputContainer}
                        inputType={CustomInputType.PASSWORD}
                        label={'Your password'}
                        onChangeText={formik.handleChange('password')}
                        onBlur={formik.handleBlur('password')}
                        value={formik.values.password}
                        errorText={formik?.errors?.password}
                        showErrorText={formik?.touched?.password}
                        returnKeyType="done"
                    />
                    <View style={styles.agreeRow}>
                        <Pressable hitSlop={12} onPress={() => formik.setFieldValue('over16', !formik.values.over16)}>
                            <Image
                                style={styles.checkbox}
                                source={formik?.values?.over16 ? CHECKED : UNCHECKED}
                                contentFit="contain"
                            />
                        </Pressable>
                        <Text style={styles.over16Text}>I am over 16 years of age</Text>
                    </View>
                    {!!formik?.touched?.over16 && <Text style={styles.errorText}>{formik?.errors?.over16}</Text>}
                    <Text style={styles.complexTextContainer}>
                        <Text style={styles.weakText}>By clicking Sign Up, you are indicating that you have read and agree to the</Text>
                        <Text style={styles.highlightText}> Terms of Service</Text>
                        <Text style={styles.weakText}> and</Text>
                        <Text style={styles.highlightText}> Privacy Policy</Text>
                    </Text>
                    <View style={[styles.continueRow, { paddingBottom: insets.bottom }]} >
                        <Text style={styles.signUpText}>Sign Up</Text>
                        <Pressable hitSlop={12} onPress={() => formik.handleSubmit()}>
                            <Image
                                style={styles.doneIcon}
                                source={DONE}
                                contentFit="contain"
                            />
                        </Pressable>
                    </View>

                </View>
            </>
            {/* <Loading visible={isLoading} /> */}
        </KeyboardAvoidingView>

    );
}

export default SignUpScreen