const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.redirect('https://bladelist.gg/')
})

app.get('*', (req, res) => {
    res.redirect('https://bladelist.gg/')
})

app.listen(5000, () => {
    console.log(`Bladelist.gg redirect listening on port `)
})