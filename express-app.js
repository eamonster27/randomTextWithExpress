const express = require('express');
const app = express();

var loremIpsum = require('lorem-ipsum')
, output = loremIpsum();

app.use(express.static('public'));

app.get('/lorem', function(req, resp){
  let lorem = loremIpsum({
    count: 3
    , units: 'paragraphs'
  });

  resp.send(`<html><body><p>${lorem}</p></body></html>`)
});

app.get('/lorem/:numParagraphs', function(req, resp){
  let lorem = loremIpsum({
    count: req.params.numParagraphs
    , units: 'paragraphs'
  });

  resp.send(`<html><body><p>${lorem}</p></body></html>`)
});

app.listen(3000, function(){
  console.log("Oh Hai! Check out http://0.0.0.0:3000");
});
