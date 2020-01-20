const express = require('express');
const cors = require('cors');
const rotas = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Draconov:draconov@cluster0-fajax.mongodb.net/locatify?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(rotas);

app.listen(8000, () => {
    console.log("server iniciado com sucesso");
})
