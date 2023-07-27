import { StyleSheet, View, Text, FlatList } from "react-native";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticles } from "./utils/api";

function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles().then((data) => {
            setArticles(data.articles);
        });
    }, []);

    type Item = { title: string; article_img_url: string; article_id: string };

    return (
        <View style={styles.container}>
            <Text>Article List</Text>
            <FlatList
                style={styles.listArticles}
                data={articles}
                renderItem={({ item }: { item: Item }) => (
                    <ArticleCard title={item.title} url_img={item.article_img_url} />
                )}
                keyExtractor={(item) => item.article_id}
            />
        </View>
    );
}

export default ArticleList;

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    listArticles: {
        marginBottom: 30,
    },
});
