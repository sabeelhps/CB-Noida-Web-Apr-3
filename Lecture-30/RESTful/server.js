const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));


const comments = [
    {
        id: 0,
        author: 'Mayank',
        text: 'Good Product'
    },
    {
        id: 1,
        author: 'Aman',
        text: 'Nice product go for it!'
    },
    {
        id: 2,
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
})

// Create a new comment
app.post('/comments', (req, res) => {
    const { author, text } = req.body;
    comments.push({ id: comments.length, author, text });
    res.redirect('/comments');
});


// Show a single comment
app.get('/comments/:commentid', (req, res) => {
    const { commentid } = req.params;
    const foundComment = comments.find((comment) => comment.id === parseInt(commentid));
    res.render('show', { comment: foundComment });
});


// ------------------------

app.get('/allcomments', (req, res) => {
    res.status(200)
        .json(comments);
})


app.listen(3000,()=>{
  console.log('server started at port 3000');
});