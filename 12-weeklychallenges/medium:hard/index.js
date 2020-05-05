// http://localhost:4012/workers/
let express = require('express');

let app = express();

let data = require('./public/workers.json')


// Making your server
const port = process.env.PORT || 4012;

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

app.post('/workers', (req, res)=>{
    const workers = {
           name: req.query.name,
           id: data.workers.length + 1
    };
    data.workers.push(workers);
    res.send(workers)
})

app.put('/workers/:id', (req, res)=>{
    const up = data.workers.find(function(workers){
        return parseInt(req.params.id) === workers.id;
    })

    if(!up){
        res.status(404).send("Couldn't find the workers")
    }
        up.name = req.query.name,
        up.salary = req.query.salary,
        up.department = req.query.department;

    res.send(up)
});

   app.delete('/workers/:id', (req, res)=>{
       
    const e = data.workers.find(function(workers){
        return parseInt(req.params.id) === workers.id;
    })
    if(!e){
        res.status(404).send("Couldn't find the workers")
    }
    const index = data.workers.indexOf(e);
    data.workers.splice(index, 1);
    res.send(e);
    res.send('Worker deleted');
});
