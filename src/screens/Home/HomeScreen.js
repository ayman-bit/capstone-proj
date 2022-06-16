import React from "react";
import {View, Text, StyleSheet, Pressable, Alert} from "react-native";
import {useNavigation} from "@react-navigation/native";
import CustomButton from "../../components/custombutton";


const HomeScreen = () => {
    const navigation = useNavigation();

    const onHomeScreen = () => {
        Alert.alert("Yeep");
        console.warn('Sign out');
        navigation.navigate('Login');
    };
    return(
        <View>
            <Text>hi</Text>
            <CustomButton
                text="Logout"
                onPressFunction={onHomeScreen}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />
        </View>
    )
}

export default HomeScreen