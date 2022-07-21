const express = require('express')
var morgan = require('morgan')
const handlebars = require('express-handlebars');
const path = require('path');
const app = express()
const port = 3000
const route = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')

// Connect to DB
db.connect();

app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true

}))
app.use(express.json())

//Routes init
route(app);

// http logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))