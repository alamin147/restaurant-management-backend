const express = require('express');
const cors = require('cors')

require('dotenv').config()
const port = process.env.PORT || 5000
const app = express();
app.use(cors());
app.use(express.json())
const recipe = require('./recipes.json')
const sponsor = require('./foodSponsor.json')
const chefs = require('./chefs.json')


app.get("/recipe", (req, res) => {
    res.send(recipe)
})

app.get("/sponsors", (req, res) => {
    res.send(sponsor)
})

app.get("/chefs", (req, res) => {
    res.send(chefs)
})

app.get("/chefs/:id", (req, res) => {
    const id = req.params.id;
    const chef = chefs?.find(in_id => in_id.id == id)
    res.send({ chef })
})


app.listen(port, () => {
    console.log("server running at", port)
})