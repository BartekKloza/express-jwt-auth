const express = require('express');
const app = express();
const port = 3001;
const adminRoutes = require('./routes/admin-api.js');
const productRoutes = require('./routes/product-api.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/robson-flowerbox-db', 
  { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
    );
mongoose.set('useFindAndModify', false);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', adminRoutes);
app.use('/api', productRoutes);


app.listen(port, () => console.log(`Express REST API listening on port ${port}!`))