const express = require('express')
const { createFrom, checkDataFn } = require('./Form')
const app = express()
const port = 3000

app.get('/*', (req, res) => {
    const result = checkDataFn(req.query);
    if (result === undefined) {
        res.send(createFrom())
    } else if (result) {
        res.send(`Ваше любимо число: ${req.query.numbers}`)
    } else {
        res.send(createFrom(req.query.numbers, result))
    }

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})