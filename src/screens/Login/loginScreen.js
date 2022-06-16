import React from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert} from "react-native";
import Logo from "../../../assets/images/icon.png";
import CustomButton from "../../components/custombutton";
import CustomInput from "../../components/customInput";
import {StatusBar} from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () => {
    const navigation = useNavigation();

    const onSignInGoogle = () => {
        Alert.alert("Yeep");
        console.warn('Sign in');
        navigation.navigate('Home');
    };

    const onSignInApple = () => {
        console.warn('Sign in');
    };

    const onSignInFacebook = () => {
        console.warn('Sign in');
    };

    const onSignInGithub = () => {
        console.warn('Sign in');
    };


    const {height} = useWindowDimensions();
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo , {height: height * 0.5}]}
                />

                <CustomButton
                    text="Sign in with Google"
                    onPressFunction={onSignInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />
                <CustomButton
                    text="Sign in with Apple"
                    onPressFunction={onSignInApple}
                    bgColor="#E3E3E3"
                    fgColor="#363636"
                />
                <CustomButton
                    text="Sign in with Facebook"
                    onPressFunction={onSignInFacebook}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                />
                <CustomButton
                    text="Sign in with Github"
                    onPressFunction={onSignInGithub}
                    bgColor="#A7FFE5"
                    fgColor="#FFFFFF"
                />

                {/*<CustomInput/>*/}


            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    root: {
        alignItems: "center",
    },
    logo: {
        width: "35%",
        maxWidth: 200,
        maxHeight: 300,
        resizeMode: "contain",
    },
});

export default LoginScreen;