var http = require('http');
setInterval(() => {
    http.get('http://bot-slaybot.herokuapp.com/');
}, 1000*60*15);
