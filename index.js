const express = require('express');
require('dotenv').config();

require('./connection');
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Port setting
app.set('port', process.env.PORT || 3000);

//Routes
app.use(require('./routes/notes.routes'));
app.listen(app.get('port'), ()=>console.log(`Server on port ${app.get('port')}`));
