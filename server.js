// server.js
// where your node app starts

// init project
var express = require('express');
var multer = require('multer');
var app = express();
var upload = multer();

app.set('view engine', 'pug');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.render('index');
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/upload", upload.single('file'), function (request, response) {
  response.send({
    filename: request.file.originalname,
    filesize: request.file.size
  });
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
