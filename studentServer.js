// express is the server that forms part of the nodejs program 
	var express = require('express'); 
	var path = require("path"); 
	var app = express(); 
// add an http server to serve files to the Edge browser  
 // due to certificate issues it rejects the https files if they are not 
 // directly called in a typed URL 
	 var http = require('http'); 
	 var httpServer = http.createServer(app);  
	 httpServer.listen(4480); 
 
// serve static files - e.g. html, css 
// this should always be the last line in the server file 
app.use(express.static(__dirname)); 

