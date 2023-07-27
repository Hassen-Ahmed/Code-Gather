import { SafeAreaView } from "react-native-safe-area-context";

import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function Login() {
    const [useName, setUserName] = useState("");

    function handleUserName(e) {
        setUserName(e.target.value);
        console.log(Object.keys(e.target));
    }
    function handleSubmit() {
        setUserName("");
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Login</Text>
                <Text>User Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="User name"
                    value={useName}
                    onChange={(e) => handleUserName(e)}
                />

                <Text>User Password</Text>

                <TextInput style={styles.input} placeholder="Password" keyboardType="numeric" />
                <Button
                    title="Log In"
                    color="#3c8eba"
                    accessibilityLabel="log in button"
                    onPress={handleSubmit}
                />
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
