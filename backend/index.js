const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user-routes.js');
const authRoutes = require('./routes/auth-routes.js');

const app = express();
const port = 3001;

mongoose
  .connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log('Database is connected');
    },
    err => {
      console.log(`Can not connect to the database${err}`);
    }
  );
mongoose.set('useFindAndModify', false);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () =>
  console.log(`Express server listening on port ${port}!`)
);
