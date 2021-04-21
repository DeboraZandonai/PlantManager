import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import userImg from "../assets/eu.jpeg";
import { color } from "react-native-reanimated";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Debora</Text>
      </View>

      <Image source={userImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: getStatusBarHeight(),
    paddingVertical: 30,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
});
