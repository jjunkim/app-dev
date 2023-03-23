const express = require('express')
const app = express()
const port = 3000;
var cors = require('cors')

app.use(cors())




var figlet = require('figlet');

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/user/:id', function (req, res) {
    // const q = req.params
    // console.log(q.id)
    const q = req.query
    console.log(q)
    res.send({ 'userid': q.id })
  })
app.get('/sound/:name', function (req, res) {
    const { name } = req.params
    if(name == "dog"){
        res.send({'sound' : '멍멍'})
    }else if (name == "cat"){
        res.send({'sound' : '야옹'})
    }else if (name == "pig"){
        res.send({'sound' : '꿀꿀'})
    }else{
        res.send({'sound' : '모름'})
    }
   
    
})



app.listen(port, () => {
    figlet('SERVER START!!', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
})