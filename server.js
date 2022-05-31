const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log("page", page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  //Randomizing values and sending them to the client when resetting the game to change the positions of the smurfs.

  else if (page == '/api') {
    if('action' in params){
      if(params['action']== 'reset'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        console.log('success');

        let posX = Math.trunc(Math.random() * 55 + 25);
        let posY = Math.trunc(Math.random() * 70 + 25);

        const objToJson = {
          width: posX,
          height: posY
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  }
  else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/main.js'){
    fs.readFile('main.js', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/main.js'){
    fs.readFile('main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == '/images/lives2.png'){
    fs.readFile('images/lives2.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/images/SmurfsVillage.png'){
    fs.readFile('images/SmurfsVillage.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/images/smurf.png'){
    fs.readFile('images/smurf.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/images/Smurfette.png'){
    fs.readFile('images/Smurfette.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/images/papaSmurf.png'){
    fs.readFile('images/papaSmurf.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/images/brainySmurf.png'){
    fs.readFile('images/brainySmurf.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/images/handySmurf.png'){
    fs.readFile('images/handySmurf.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/images/vanitySmurf.png'){
    fs.readFile('images/vanitySmurf.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/images/Azrael.png'){
    fs.readFile('images/Azrael.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/images/Gargamel_SV.gif'){
    fs.readFile('images/Gargamel_SV.gif', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/gif'});
      res.write(data);
      res.end();
    });
  }else{
    // figlet('404!!', function(err, data) {
    //   if (err) {
    //       console.log('Something went wrong...');
    //       console.dir(err);
    //       return;
    //   }
    //   res.write(data);
    //   res.end();
    // });
  }
});
server.listen(8000);

