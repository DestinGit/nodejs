const http = require('http');
const url = require('url');
const querystring = require("querystring");

var helloResponse = (response, params)=>{
    response.write("<h1>Hello " + params.name +"</h1>");
    response.end();
};

var indexResponse = (response)=>{
    response.write("<h1>Accueil du site</h1>");
    response.end();
};

var notFoundResponse = (response)=> {
    response.writeHead(404);
    response.write("page introuvable");
    response.end();
};

var routes = {
  "/": indexResponse,
  "/hello": helloResponse
};

//Gestion de la requête
var handleRequest = (request, response)=> {
    var route = url.parse(request.url).pathname;

    var params = querystring.parse(url.parse(request.url).query);

    if(route in routes){
        routes[route](response, params);
    } else {
        notFoundResponse(response);
    }
};
//Création du serveur
const server = http.createServer().listen(8100);
//Gestionnaire d'événement
server.on('request', handleRequest);