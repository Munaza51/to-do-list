const express = require('express');
require('dotenv').config();
// import routes
const todoRoutes = require('./routes/todo');

// Running express server
const app = express();
const port = process.env.PORT || 3000;

// route middlewares
app.use(express.json());
app.use('/api', todoRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
