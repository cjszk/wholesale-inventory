const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const morgan = require('morgan');
const { PORT, CLIENT_ORIGIN } = require('./config');

const app = express();
app.use(bodyParser.json());

const customersRouter = require('./routes/customersRoute.js');
const employeesRouter = require('./routes/employeesRoute.js');
const ordersRouter = require('./routes/ordersRoute.js');
const productsRouter = require('./routes/productsRoute.js');
const warehousesRouter = require('./routes/warehousesRoute.js');

app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'common', {
    skip: () => process.env.NODE_ENV === 'test'
}));
  
app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.use(express.static('public'));

app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  if (req.method === 'OPTIONS') {
    return res.send(204);
  }
  next();
});  

app.use('/api', customersRouter);
// app.use('/api', employeesRouter);
// app.use('/api', ordersRouter);
// app.use('/api', productsRouter);
// app.use('/api', warehousesRouter);

// app.get('/api/customers', (req, res) => {
//   // pool.query(`select * from ${table}`, (err, rows) => {
//   //   if (err) {
//   //     res.send(err);
//   //   } else {
//   //     res.send(rows);
//   //   }
//   // });

//   console.log("hello")
//   res.send({response: "woohoo"});
// });

// Catch 404s
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
})

//Otherwise catch other errors, 500 if no other error.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
      message: err.message,
      error: app.get('env') === 'development' ? err: {}
  });
});

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('addr: '+add);
});

app.listen(PORT, () => {
  console.info(`Server port opened on ${PORT}`);
}).on('error', err => {
  console.error(err);
});

module.exports = { app };