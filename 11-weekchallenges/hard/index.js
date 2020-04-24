let express = require('express');

let app = express();

let data = require('./public/workers.json')


// Making your server
const port = process.env.PORT || 4000;

app.listen(port, ()=> {
    console.log(`Server running on port${port}`)
})

app.get('/workers', (req, res)=> {
    if(!data){
        res.status(404).send("Couldn't find the workers")
    }

    res.send(data);
})

app.get('/workers/:id', function(req, res){
    const wData = data.workers.find(function(workers){
        console.log(workers.id);

        return parseInt(req.params.id) === workers.id;
    })
    if(!wData){
        res.status(404).send("Couldn't find the workers")
    }
    res.send(wData);
})