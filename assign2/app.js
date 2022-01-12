const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('First Middle');
//     next();
// })

// app.use((req, res, next) => {
//     console.log('Second Middle');
//     res.send('<p>Assignment</p>');
// })
app.use('/users', (req, res, next) => {
    console.log('Second Middle');
    res.send('<p>Middleware for /users</p>');
})

app.use('/', (req, res, next) => {
    console.log('First Middle');
    res.send('<p>Middleware for /</p>');
})


app.listen(3000);