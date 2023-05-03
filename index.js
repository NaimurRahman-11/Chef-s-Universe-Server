const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.port || 5000;
const chef = require('./data/chef.json');
const recipes = require('./data/recipes.json');


app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is running');
});

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`);
});

app.get('/chef', (req, res) => {
    res.send(chef);
});

app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chefRecipes = recipes.filter(n => parseInt(n.chef_id) === id);
    res.send(chefRecipes);
});

app.get('/recipes', (req, res) => {
    res.send(recipes);
});

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipe = recipes.find(n => n._id === id);
    res.send(selectedRecipe);
});

