const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./crud.js'))

app.listen(3000, () => {
    console.log('Server started!!!')
})