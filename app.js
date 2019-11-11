const express = require("express");

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'assets')));

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(bodyParser.json());

const routes = require('./routes/appRoutes'); //importing route
app.use(routes); //register the route

