const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening at 3000'));
app.use(express.static('public'))
app.use(express.json());

app.post('/param', (request, response) => {
    fs.writeFileSync('params.json', JSON.stringify(request.body, null, 2), () => {
    });
});

app.get('/params', (request, response)=> {
    var data = fs.readFileSync('params.json');
    var params = JSON.parse(data);
    response.send(params);
})