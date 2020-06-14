const PORT = process.env.PORT || 3000;  // pobranie ze zmiennej środowiskowej (z zewnątrz, np. przy wywołaniu) lub domyślna wartość 3000
    // port 3000 jest czesto domyślnym dla usług RESTowych na hostingach?! (albo taki standard)
 
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use( cors() );  // middleware cors dla otwarcia API n adostęp publiczny (w dowolnego adresu/domeny)

// create post
app.post('/api/posts', (req, res) => {
 res.send('create post');
});
 
// read post
app.get('/api/posts', (req, res) => {
 // res.send('{posts: []}');
 res.json({ posts: [] });
});
 
app.get('/api/posts/:id', (req, res) => {
 console.warn(req.params);
 res.send('read a single post: ' + req.params.id);
});
 
// update post
app.put('/api/posts/:id', (req, res) => {
 res.send('update a single post: ' + req.params.id);
});
 
// delete post
app.delete('/api/posts/:id', (req, res) => {
 res.send('delete a single post: ' + req.params.id);
});
 
// utils
app.get('/api/status', (req, res) => {
 res.json({ status: 'Server works!' });
});
 
app.get('/api/db-backup', (req, res) => {
 res.download('./database/posts.db', 'db-backup.db');
});
 
// serve static angular files
app.use('/', express.static(path.resolve(__dirname, './client/dist/client')));
 
app.get('*', (req, res) => {
 res.sendFile(path.resolve(__dirname, './client/dist/client/index.html'));
});
 
app.listen(PORT);