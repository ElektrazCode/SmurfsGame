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

        const newPositionArray = [];
        for (let i = 0; i < 9; i++) {
          do{
            posX = Math.trunc(Math.random() * 90 + 2);
            posY = Math.trunc(Math.random() * 60 + 25);
            // console.log('testing: i = ', i, posX, posY);
          }while(isOccupied(newPositionArray, posX, posY));
          
        }
      
        res.end(JSON.stringify(newPositionArray));
      }
    }
  }
  else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if (page == '/GROBOLD.tff'){
    fs.readFile('/GROBOLD.tff', function(err, data) {
      res.writeHead(200, {'Content-Type': 'application/octet-stream'});
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
server.listen(8000);


function isOccupied(newPositionArray, posX, posY){
  console.log(newPositionArray, posX, posY)
  for (let i = 0; i < newPositionArray.length; i++) {
    // console.log("distance apart: ", Math.abs(newPositionArray[i].left - posX), Math.abs(newPositionArray[i].top - posY))
    if (Math.abs(newPositionArray[i].left - posX) <= 4 || Math.abs(newPositionArray[i].left.top - posY) <= 4) {
      return true;
    } 
  };

  newPositionArray.push({
    left: posX,
    top: posY
  });

  return false;
}

