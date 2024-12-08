const express = require('express');

const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const expressValidator = require('express-validator');

require('dotenv').config();
// import routes

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const braintreeRoutes = require('./routes/braintree');
const projectRoutes = require('./routes/projects');
const rewardsRoutes = require('./routes/rewards');

// db connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
  console.log('MongoDB Connected');
} catch (err) {
  console.error(err.message);
  // exit process with failure
  process.exit(1);
}
};
connectDB();


// app
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(expressValidator());
app.use(cors());


//test API
app.get('/api/helloWorld', (req, res) => {
  res.send('Hello World from Leep!');
});


// routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);

app.use('/api', braintreeRoutes);
app.use('/api', projectRoutes);
app.use('/api', rewardsRoutes);


// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// starting server.
const PORT = process.env.PORT || 5200;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//tesint github.
