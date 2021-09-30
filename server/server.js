const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const controller = require('./controller');

console.log("🚀🚀🚀🚀🚀 ~ file: server.js ~ line 6 ~ HELLO SEB");

// Serve static html/CSS that is in the client folder
// app.use('/quotes', express.static(path.join(__dirname, './../client/')));


app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + './../client/index.html'));
})



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});