const express = require('express');
const app = express();
const path = require('node:path');
const { logger } = require('./middleware/logEvents');
const cors = require('cors');
const PORT = process.env.PORT || 3500;
const errorHandler = require('./middleware/errorHandler');
const corsOptions = require('./config/corsOptions');
app.use(logger);

// Cross Origin Resource Sharing

app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// in other words, form data:
// ‘content-type: application/x-www-form-urlencoded’
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

//import router
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/employees', require('./routes/api/employees'));

app.get('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use(errorHandler);

app.all('*', (req, res) => {
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not Found' });
  } else {
    res.type('text');
  }
});

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
