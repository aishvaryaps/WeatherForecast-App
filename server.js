var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8888, function(){
    //console.log('Node server running...');
});
