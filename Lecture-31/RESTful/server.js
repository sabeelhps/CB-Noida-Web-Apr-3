const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

let comments = [
    {
        id: uuid(),
        author: 'Mayank',
        text: 'Good Product'
    },
    {
        id: uuid(),
        author: 'Aman',
        text: 'Nice product go for it!'
    },
    {
        id: uuid(),
        author: 'ABC',
        text: 'This is some comment'
    },
];


// GET all the comments
app.get('/comments', (req, res) => {
    res.render('index', { comments });
});

// GET a new form
app.get('/comments/new', (req, res) => {
    res.render('new');
});

// Create a new comment
app.post('/comments', (req, res) => {
    const { author, text } = req.body;
    comments.push({ id: uuid(), author, text });
    res.redirect('/comments');
});


// Show a single comment
app.get('/comments/:commentid', (req, res) => {
    const { commentid } = req.params;
    const foundComment = comments.find((comment) => comment.id === commentid);
    res.render('show', { comment: foundComment });
});

app.get('/comments/:commentid/edit', (req, res) => {
    const { commentid } = req.params;
    const foundComment = comments.find((comment) => comment.id === commentid);
    res.render('edit', { comment: foundComment });
});

app.patch('/comments/:commentid', (req, res) => {
    const { commentid } = req.params;
    const { author, text } = req.body;
    const foundComment = comments.find((comment) => comment.id === commentid);
    foundComment.author = author;
    foundComment.text = text;

    res.redirect('/comments');
});


app.delete('/comments/:commentid', (req, res) => {
    const { commentid } = req.params;
    const newCommentsArray = comments.filter((comment) => comment.id !== commentid);
    comments = newCommentsArray;
    res.redirect('/comments');
});


// ------------------------

app.get('/allcomments', (req, res) => {
    res.status(200)
        .json(comments);
});


app.listen(3000,()=>{
  console.log('server started at port 3000');
});