const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//Port
const port = 3000;

// Init app
const app = express();

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/express-todoapp';

// Boby Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// View Setup
app.set('vies', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Connect to mongodb

MongoClient.connect(url, (err, database) => {
    console.log('MongoDB Connected...');
    if(err) throw err;

    db = database;
    Todos = db.collection('todos');

    app.listen(port, () => {
    console.log('Server running on port ' + port);
});

});

//noinspection BadExpressionStatementJS
app.get('/', (req, res, next) => {
    Todos.find({}).toArray((err, todos) => {
        if(err){
            return console.log(err);
        }
        console.log(todos);
        res.render('index', {
            todos: todos
        });
    });
});

