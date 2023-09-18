const express = require('express');
const app = express();

app.get('/', (req, res)=> {

    res.send(`
    <h1>99 Bottles of soda on the wall</h1>
    <a href="/98">Take one down, pass it around</a>
  `);
})


app.get('/:number_of_bottles', (req, res)=>{
    const bottels= parseInt(req.params.number_of_bottles);
    if (bottels === 0) {
        res.send(`<h2> no more bottels</h2>
        <a href='/'>start over</a>`)
    }
    else{
        const newNumber= bottels -1
        res.send(`<h2>${newNumber}Bottles of beer on the wall.</h2>
        <a href="/${newNumber}">Take one down, pass it around </a>`)
    }
})


app.listen(3000, () => {
    console.log('listening');
});