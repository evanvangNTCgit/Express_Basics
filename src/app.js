const path = require('path');
const { createReadStream } = require('fs');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('HELLO welcome to Evan\'s nodeJS Express Server!');
});

// These are my routes for if the user does not wish to use the button
// Or they want a quick link to a desired page instead of navigating the home page.
app.get('/home', (req, res) => {
  try {
    // Set the header content to html.
    res.setHeader('Content-Type', 'text/html');

    // Letting dev know connection was good
    res.writeHead(200, console.log('Connection to home was good!'));

    // Create a readstream to my homepage
    // And pipe it to the response for the user to see.
    const read = createReadStream(path.join(__dirname, 'home.html'));
    read.pipe(res);
  } catch (e) {
    console.error(e.message);
  }
});

app.get('/about', (req, res) => {
  try {
  res.setHeader('Content-Type', 'text/html');
  // Letting dev know connection was good
  res.writeHead(200, console.log('Connection to home was good!'));

  const read = createReadStream(path.join(__dirname, 'about.html'));
  read.pipe(res);
  }
  catch (e) {
    console.error(e.message);
  }
});

app.get('/contact', (req, res) => {
  try {
  res.setHeader('Content-Type', 'text/html');
  // Letting dev know connection was good
  res.writeHead(200, console.log('Connection to home was good!'));

  const read = createReadStream(path.join(__dirname, 'contact.html'));
  read.pipe(res);
  }
  catch (e) {
    console.error(e.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening at localhost:${PORT}`);
});
