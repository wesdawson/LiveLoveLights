var express = require('express');
var app = express();

//serve static page
app.configure(function(){
  app.use('/media', express.static(__dirname + '/media'));
  app.use(express.static(__dirname + '/public'));
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
