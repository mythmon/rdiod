var fs = require('fs');

var express = require('express');
var app = express();


app.get('/', function(req, res) {
    fs.createReadStream('index.html').pipe(res);
});

app.get('/helper.html', function(req, res) {
    fs.createReadStream('helper.html').pipe(res);
});

app.get('/gui.js', function(req, res) {
    fs.createReadStream('gui.js').pipe(res);
});

app.get('/api/pause', function(req, res) {
    R.player.pause();
    res.status(204);
    res.end();
});

app.get('/api/play', function(req, res) {
    R.player.play();
    res.status(204);
    res.end();
});

var R;

exports.ready = function() {
    R = window.R;
    console.log('doing auth dance');
    R.ready(function() {
        if (R.authenticated()) {
            console.log('already authed');
            rdioReady();
        } else {
            console.log('authing');
            R.authenticate(rdioReady);
        }
    });
};

function rdioReady() {
    console.log('Rdio is ready.');
}

exports.player = {
    pause: function() {
        R.player.pause();
    },
    play: function() {
        R.player.play();
    },
};

app.listen(8572);
