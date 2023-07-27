const urlBase = "https://news-api-d5x1.onrender.com/api";
export const getArticles = async () => {
    const res = await fetch(`${urlBase}/articles`);
    const articles = res.json();
    return articles;
};
