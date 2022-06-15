import React from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from "react-native";
import Logo from "../../../assets/images/icon.png";
import CustomButton from "../../components/custombutton";
import CustomInput from "../../components/customInput";
import {StatusBar} from "expo-status-bar";

const onSignInGoogle = () => {
    console.warn('Sign in');
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

const LoginScreen = () => {
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
                    onPess={onSignInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />
                <CustomButton
                    text="Sign in with Apple"
                    onPess={onSignInApple}
                    bgColor="#E3E3E3"
                    fgColor="#363636"
                />
                <CustomButton
                    text="Sign in with Facebook"
                    onPess={onSignInFacebook}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                />
                <CustomButton
                    text="Sign in with Github"
                    onPess={onSignInGithub}
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