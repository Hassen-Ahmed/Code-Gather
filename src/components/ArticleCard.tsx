import { StyleSheet, Image, View, Text, SafeAreaView, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

type Props = {
    title?: string;
    url_img?: string;
};

function ArticleCard({ title, url_img }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.img_container}>
                <Image
                    style={styles.img}
                    source={{
                        uri: url_img,
                    }}
                />
            </View>
        </View>
    );
}
export default ArticleCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    title: {
        width: width / 1.2,
        textAlign: "center",
    },
    img_container: {
        width: width / 1.2,
        height: height / 2.5,
        borderRadius: 20,
        backgroundColor: "grey",
        overflow: "hidden",
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
});
