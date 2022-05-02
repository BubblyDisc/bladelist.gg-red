const express = require('express')
const app = express()

const delay = ms => new Promise(res => setTimeout(res, ms));

app.get('/', async (req, res) => {
    await delay(1000)

    res.redirect('https://bladelist.gg/')
})

app.get('*', async (req, res) => {
    await delay(1000)

    res.redirect('https://bladelist.gg/')
})

app.listen(process.env.PORT, () => {
    console.log(`Bladelist.gg redirect listening on port ${process.env.PORT}`)
})