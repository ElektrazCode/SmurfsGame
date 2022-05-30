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
<<<<<<< HEAD
<<<<<<< HEAD
  //Randomizing values and sending them to the client when resetting the game to change the positions of the smurfs.
=======
>>>>>>> cd5d9313c556520c32cca83786d20d4c3bfaef31
=======
>>>>>>> 6ce752565975dd13800b5590f1cf3fcd1783ff76
  else if (page == '/api') {
    if('action' in params){
      if(params['action']== 'reset'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        console.log('success');
<<<<<<< HEAD
<<<<<<< HEAD
        let posX = Math.trunc(Math.random() * 55 + 25);
        let posY = Math.trunc(Math.random() * 70 + 25);
=======
        let posX = Math.random() * 55 + 25;
        let posY = Math.random() * 70 + 25;
>>>>>>> cd5d9313c556520c32cca83786d20d4c3bfaef31
=======
        let posX = Math.random() * 55 + 25;
        let posY = Math.random() * 70 + 25;
>>>>>>> 6ce752565975dd13800b5590f1cf3fcd1783ff76

        const objToJson = {
          width: posX,
          height: posY
        }
        res.end(JSON.stringify(objToJson));
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 6ce752565975dd13800b5590f1cf3fcd1783ff76
      }//student = leon
      else if(params['student'] != 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
<<<<<<< HEAD
>>>>>>> cd5d9313c556520c32cca83786d20d4c3bfaef31
=======
>>>>>>> 6ce752565975dd13800b5590f1cf3fcd1783ff76
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
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

<<<<<<< HEAD
<<<<<<< HEAD
server.listen(8000);
=======
server.listen(8000);
>>>>>>> cd5d9313c556520c32cca83786d20d4c3bfaef31
=======
server.listen(8000);
>>>>>>> 6ce752565975dd13800b5590f1cf3fcd1783ff76
