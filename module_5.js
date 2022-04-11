const bookShelf = {
    authors: ["Бернард Корнуелл", "Роберт Шеклі"],
    getAuthors() {
        return this.authors;
    },
    addAuthor(authorName) {
        this.authors.push(authorName);
    },
};

console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
bookShelf.addAuthor("Ли Танит");
console.log(bookShelf.getAuthors());