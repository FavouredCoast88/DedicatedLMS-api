const articles = [];

let nextId = 1;

const getAllArticles = () => {
    return articles;
};

const createArticle = (title, author, content) => {

    const article = {
        id: nextId++,
        title,
        author,
        content,
        published: false
    };

    articles.push(article);

    return article;
};

const getArticleById = (id) => {
    return articles.find(article => article.id === id);
};

const searchArticles = (searchTerm) => {
    return articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

const deleteArticle = (id) => {

    const articleIndex = articles.findIndex(
        article => article.id === id
    );

    if (articleIndex === -1) {
        return false;
    }

    articles.splice(articleIndex, 1);

    return true;
};

const updateArticle = (id, title, author, content) => {

    const article = articles.find(
        article => article.id === id
    );

    if (!article) {
        return null;
    }

    article.title = title;
    article.author = author;
    article.content = content;

    return article;
};

const publishArticle = (id) => {

    const article = articles.find(
        article => article.id === id
    );

    if (!article) {
        return null;
    }

    article.published = true;

    return article;
};

module.exports = {
    getAllArticles,
    createArticle,
    getArticleById,
    searchArticles,
    deleteArticle,
    updateArticle,
    publishArticle
};