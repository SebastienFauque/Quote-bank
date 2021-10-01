const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const controller = require('./controller');


console.log("🚀🚀🚀🚀🚀 ~ file: server.js ~ line 6 ~ HELLO SEB");

// Body parser goes before CRUD HTML operations
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static html/CSS that is in the client folder
// app.use('/', express.static(path.join(__dirname, './../index.html')))

//? I want this to fill the All quotes part
// Allows us to serve static files. CSS, HTML and JS are static files if they don't change.
app.use('/quotes', express.static(path.join(__dirname, './../index.html')));


// Landing page currently works
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + './../index.html'));
})



// Get all quotes
app.get('/quotes', controller.getQuotes, (req, res) => {
  const {allQuotes} = res.locals.allQuotes;
  console.log(`SEVER.JS GET ALL QUOTES:`, allQuotes);
  // massage the data
  res.status(200).json(allQuotes);
})

// Post this to the DB
app.post('/quotes', controller.getIndex, controller.postQuote, (req, res) => {
  console.log('post was made');
  res.redirect('/');
})

// Delete from DB
// Get the correct index
app.delete('/quotes', controller.deleteQuote, (req, res) => {
  console.log('quote was deleted:', req.body);
  console.log("🚀 🚀 🚀 🚀 🚀 ~ file: server.js ~ line 47 ~ app.delete ~ req.body", req.body)
  console.log("🚀 ~ file: server.js ~ line 47 ~ app.delete ~ req.body", req.body)
  res.redirect('/');
})

// Update DB
app.put('/quotes', controller.updateQuote, (req, res) => {
  console.log('quote was updated:', req.body);
  console.log("🚀 ~ file: server.js ~ line 53 ~ app.put ~ req.body", req.body)
  console.log("🚀 ~ file: server.js ~ line 53 ~ app.put ~ req.body", req.body)
  res.status(200);
})


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});