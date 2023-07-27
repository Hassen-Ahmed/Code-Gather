import { SafeAreaView } from "react-native-safe-area-context";

import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";

export default function SingUp() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>SingUp</Text>
                <Text>User Name</Text>
                <TextInput style={styles.input} placeholder="User name" />
                <Text>User Email</Text>
                <TextInput style={styles.input} placeholder="Email" keyboardType="email" />
                <Text>User Password</Text>

                <TextInput style={styles.input} placeholder="Password" keyboardType="numeric" />

                <Button title="Sign In" color="#3c8eba" accessibilityLabel="sing in button" />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: "center",
        padding: 24,
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
