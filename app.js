const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const config = require('./config/config');
const indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware for processing POST variables
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    if (req.accepts('json') && !req.accepts('html')) {
        res.status(404).send({
            error: 'Not found'
        });
    } else {
        res.status(404).render('error404', {
            title: "Sorry, page not found"
        });
    }
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    console.log('Error: ');
    console.log(err);
    if (req.accepts('json') && !req.accepts('html')) {
        res.send({
            'error': true
        });
    } else {
        res.render('error');
    }
});

module.exports = app;
