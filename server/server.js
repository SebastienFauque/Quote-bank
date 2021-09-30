const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;
const controller = require('./controller');

console.log("🚀🚀🚀🚀🚀 ~ file: server.js ~ line 6 ~ HELLO SEB");

// Body parser goes before CRUD HTML operations
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static html/CSS that is in the client folder
// app.use('/quotes', express.static(path.join(__dirname, './../client/')));


app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + './../client/index.html'));
})

// Post this to the DB
app.post('/quotes', controller.getIndex, controller.postQuote, (req, res) => {
  console.log('post was made');
  res.redirect('/');
})


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});