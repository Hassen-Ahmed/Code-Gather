import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Page() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <LinearGradient colors={["#3c8eba", "#a62126"]} style={styles.background} />
                <View style={styles.code_gather}>
                    <Text style={styles.logo}>{"<../>"}</Text>
                    <Text style={styles.title}>Code Gather</Text>
                </View>

                <View style={styles.link_container}>
                    <TouchableOpacity>
                        <Link href="/login" style={styles.link}>
                            Log In
                        </Link>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Link href={`/singup`} style={styles.link}>
                            Sign up
                        </Link>
                    </TouchableOpacity>
                </View>
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
    code_gather: {
        flex: 0,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 30,
        width: width / 1.1,
        height: height / 2.8,
        borderColor: "orange",
        borderWidth: 2,
        borderRadius: 20,
    },
    logo: {
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: "15%",
        color: "orange",
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
    },
    link_container: {
        paddingHorizontal: 40,
        paddingTop: 30,
        marginTop: 10,
        width: 400,
        justifyContent: "flex-start",
        alignItems: "center",

        width: width / 1.1,
        height: height / 1.9,
        borderColor: "#0077b6",
        borderWidth: 2,
        borderRadius: 20,
    },
    link: {
        padding: 10,
        width: width / 2,
        marginVertical: 10,
        borderRadius: 10,

        fontSize: 20,
        textAlign: "center",
        color: "white",
        backgroundColor: "#0077b6",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
    },
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: height,
    },
});
