class NewsController {

    //[GET] /news
    index() {
        res.render('news')
    }

    //[GET] /news/slug
    show(req, res) {
        res.send('News Detail')
    }
}

module.exports = new NewsController;