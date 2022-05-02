const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.redirect('https://bladelist.gg/')
})

app.get('*', (req, res) => {
    res.redirect('https://bladelist.gg/')
})


app.listen(process.env.PORT, () => {
    console.log(`Bladelist.gg redirect listening on port ${process.env.PORT}`)
})
