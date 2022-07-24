const express = require('express');
const app = express();



// app.use((req, res) => {
//     // console.log(req);
//     // console.log(res);
//     // res.send('HELLO FROM THE SERVER');
//     res.send('<h1>THIS IS SOME HTTP RESPONSE!</h1>')
// });




app.listen(3000, () => {
    console.log('Server started listening at port 3000');
});







