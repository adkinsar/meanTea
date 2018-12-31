const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
// this is for all static files to be found


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb://127.0.0.1:27017/todoapp', { useNewUrlParser: true })
.then(()=> { console.log(`Succesfully Connected to the Mongodb Database  at URL :mongodb://127.0.0.1:27017/teashop`), app.listen(3000) })
.catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL :mongodb://127.0.0.1:27017/teashop`)});