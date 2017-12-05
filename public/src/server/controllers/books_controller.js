var books = []

var id = 0;

module.exports = {
    Create(){
        const {title, author} = req.body;
        books.push({id, title, author});
        id++;
        res.status(200).send(books);
    },
    Read(){
        res.status(200).send(books);
    },
    Update(){
        var updateID = req.params.id;
        var index = books.findIndex( book => book.id == updateID);

        books[index] = {
            id: books[index].id,
            title: req.body.title || books[index].title,
            author: req.body.author || books[index].author
        }

        res.status(200).send(books);
    },
    Delete(){
        var updateID = req.params.id;
        var index = books.findIndex(books => book.id == updateID)

        books.splice(index, 1);

        res.status(200).send(books);
    }
}