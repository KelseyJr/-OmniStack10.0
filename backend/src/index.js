const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); 
const cors = require('cors');

mongoose.connect('mongodb+srv://semana:semana@cluster0-l4l5b.mongodb.net/semana10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);