//npm modules that also need to be in the package.json file
var express = require('express');


var app=express();

//server everything (no welcome file)
app.use(function(req, res){
	res.sendfile(__dirname + '/public' + req._parsedUrl.path, function(err){
		if(err){
			console.log(err);
			res.send(err.status, err.code);
		}
	});
});


//set ipaddress from openshift, to command line or to localhost:8080
var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || parseInt(process.argv.pop()) || 8080;

//start the server listening for requests
app.listen(port, ipaddr);
console.log('node.js running at port ' + port);