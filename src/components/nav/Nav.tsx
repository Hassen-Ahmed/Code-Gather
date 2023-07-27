import { StyleSheet, Image, View, Text, SafeAreaView, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Nav() {
    return (
        <View style={styles.container}>
            <Text style={styles.nav_text}>Home</Text>
            <Text style={styles.nav_text}>Filter</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: width,
        margin: 10,
        padding: 5,
        // height: 30,
        backgroundColor: "orange",
    },
    nav_text: {
        color: "white",
        fontSize: 20,
    },
});
