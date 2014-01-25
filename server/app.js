var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');

var app = express();

app.set('port', process.env.PORT || 9000);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

if (process.argv.indexOf('-dev') > -1) {
    app.use(require('connect-livereload')({
        port: 35729
    }));

    app.use(express.static(path.join(__dirname, '../client/app')));
} else {

    app.use(express.static(path.join(__dirname, '../client/dist')));
}

if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server listening on port ' + app.get('port'));
});