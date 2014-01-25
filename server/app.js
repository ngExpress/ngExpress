var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var consolidate = require('consolidate');

var app = express();

app.engine('html', consolidate.ejs);
app.set('view engine', 'html');

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

    app.get('/', function(request, response){
        response.render(path.join(__dirname, '../client/app/index.html'), {
            title: 'ngExpress [DEV]'
        });
    });

    app.use(express.static(path.join(__dirname, '../client/app')));
} else {
    app.get('/', function(request, response){
        response.render(path.join(__dirname, '../client/dist/index.html'), {
            title: 'ngExpress'
        });
    });

    app.use(express.static(path.join(__dirname, '../client/dist')));
}

if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server listening on port ' + app.get('port'));
});