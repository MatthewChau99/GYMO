const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const AuthRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');
const foodRoute = require('./routes/food');
const picRoute = require('./routes/pic');
const path = require('path');



mongoose.connect('mongodb://127.0.0.1:27017/testdb', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
});

db.once('open', () => {
    console.log('Database Connection Established!');
});

const app = express();
app.set("view engine", "react");
app.set("views", path.join(__dirname, "../react/src/views"));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/account', AuthRoute);
app.use('/posts', postsRoute);
app.use('/food', foodRoute);
app.use('/pic', picRoute);


