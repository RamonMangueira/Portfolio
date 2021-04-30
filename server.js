const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const api = require('./backend/routes');

//app.use(bodyParser.json()); comando depreciado
app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());
//acima temos a resolução do problema com o bodyParser

//ROTA PRINCIPAL
app.get('/', (req, res) => {
    res.json({
        'success': true
    });
});

//ROTA DA API
app.use('/api', api)

const PORT = process.env.PORT;
app.listen(PORT, function(){
    console.log("Servidor rodando na porta:", PORT)
});