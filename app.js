const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');


// string de conexão  =>  mongodb+srv://<username>:<password>@busontime-avdnj.mongodb.net/test?retryWrites=true&w=majority


const url = 'mongodb+srv://admin:CB1G9H2uA5nbFVLn@busontime-avdnj.mongodb.net/test?retryWrites=true&w=majority'
const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');
const options = {
                    reconnectTries: Number.MAX_VALUE,
                    reconnectInterval: 500,
                    poolSize : 5,
                    useNewUrlParser: true
                };

mongoose.connect(url, options);
mongoose.set('useCreatIndex', true);

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: '+ err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados');
});

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!');
});

//Body Parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.use('/', indexRoute);
app.use('/users', usersRoute);



app.listen(3000);

module.exports = app;