const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');
const app = express();

db.connectToServer();

// Router
const indexRouter = require('./routes/index');
const itemRouter = require('./routes/item');

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/Item', itemRouter);


// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT, function() {
  console.info('Server Started, port listen', process.env.PORT);
});