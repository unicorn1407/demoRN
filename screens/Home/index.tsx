import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Alert, FlatList, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { CATEGORY_BG, CHECKED, DONE, IMG_BLUR_HASH, UNCHECKED } from "constants/image";
import { CustomInput, Loading } from "components";
import { CustomInputType } from "constants/type";
import { useFormik } from 'formik';
import validationSchema from './validation'
import styles from "./styles";
import { useAppDispatch, useAppSelector } from "hooks";
import { useNavigation } from "@react-navigation/native";
import { SignInActionParams, loginThunk, signupThunk } from "redux/auth/thunk";
import { HEIGHT_RATIO, WIDTH, WIDTH_RATIO } from "constants/commons";
import { Colors, Gradient } from "constants/colors";
import { LinearGradient } from 'expo-linear-gradient';
import { getListCategoryThunk } from "redux/category/thunk";
import { setUserSelected } from "redux/category/slice";

interface IFormikSignupValues {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    over16: boolean;
}

const HomeScreen = () => {
    const dispatch = useAppDispatch()
    const categorySelector = useAppSelector((state) => state.category);
    const { error: reduxError, categories, isLoading, userSelected } = categorySelector
    const accessToken = useAppSelector((state) => state.auth.accessToken)
    const [apiError, setApiError] = useState(null);
    const [selectedArr, setSelectedArr] = useState(new Set([2, 3, 5]));

    useEffect(() => {
        if (accessToken) {
            dispatch(getListCategoryThunk(accessToken))
        }
    }, [accessToken]);

    useEffect(() => {
        if (reduxError) {
            setApiError(reduxError)
            Alert.alert('Error', reduxError); // Display an alert once
        }
    }, [reduxError])

    const insets = useSafeAreaInsets();
    const toggleSelection = (itemId: number) => {
        const updatedSet = new Set(selectedArr);
        if (updatedSet.has(itemId)) {
            updatedSet.delete(itemId);
        } else {
            updatedSet.add(itemId);
        }
        setSelectedArr(updatedSet);
    };


    const renderCategory = ({ item }) => {
        return (
            <Pressable hitSlop={10} onPress={() => toggleSelection(item?.id)}>
                {selectedArr.has(item?.id) ? (
                    <LinearGradient
                        colors={Gradient.CATEGORY_PURPLE}
                        style={styles.categoryContainer}
                        end={{ x: 1, y: 1.5 }}
                        start={{ x: 0, y: 0 }}
                    >
                        <Text style={styles.categoryLabel}>
                            {item?.name}
                        </Text>
                    </LinearGradient>
                ) :
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryLabel}>
                            {item?.name}
                        </Text>
                    </View>}
            </Pressable>
        )
    }

    const onDoneBtnPress = () => {
        dispatch(setUserSelected([...selectedArr]))
    }

    return (
        <View
            style={styles.container}>
            <>
                <Image
                    style={styles.backgroundImage}
                    source={CATEGORY_BG}
                    placeholder={IMG_BLUR_HASH}
                    contentFit="cover"
                />
                <View style={{ paddingTop: insets.top + 7 * HEIGHT_RATIO, paddingRight: 24 * WIDTH_RATIO, alignItems: 'flex-end' }}>
                    <Pressable onPress={onDoneBtnPress}>
                        <Text style={styles.doneBtn}>Done</Text>
                    </Pressable>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: 'center' }}>
                    <Text style={
                        styles.welcome
                    }>Welcome to Nexle Entrance Test</Text>

                    <Text style={styles.pleaseSelectCat}>Please select categories what you would like to see on your feed. You can set this later on Filter.</Text>
                    <FlatList
                        bounces={false}
                        data={categories}
                        ListFooterComponent={() => <View style=
                            {{ backgroundColor: 'red', marginBottom: 33 * HEIGHT_RATIO + insets.bottom }} />}
                        numColumns={3}
                        ItemSeparatorComponent={() => <View style={{ height: 8 * HEIGHT_RATIO }} />}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderCategory}
                    />
                </View>
            </>
            <ActivityIndicator size={"large"} animating={isLoading} />
        </View>

    );
}

export default HomeScreen