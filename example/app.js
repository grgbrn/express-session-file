#!/usr/bin/env node

var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var FileSessionStore = require('../lib/connect-session-file');

var app = express();

app.use(cookieParser());
app.use(session({
    secret:'your secret here',   
    store: new FileSessionStore({
      path:"/tmp/express-file-sessions",
      printDebug:true
    })
}));

app.get('/', function(req, res){
    var sess = req.session;
    console.log('+ begin ' + req.url );
    if (sess.views) {
        sess.views++;
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>views: ' + sess.views + '</p>');
        res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
        res.end();
    } else {
        sess.views = 1;
        res.end('welcome to the file session demo. refresh!');
    }
});

app.listen(8080);
