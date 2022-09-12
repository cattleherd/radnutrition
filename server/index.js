const dotenv = require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')
const LocalStrategy = require('passport-local').Strategy
const crypto = require('crypto')
const app = express();
const userRoutes = require('./routes/users')
const diaryRoutes = require('./routes/diary')

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, 
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log('connected');
        console.log(mongoose.connection.readyState)
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};

connectDB();

//set up storing session on server
const sessionStore = MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    collection: 'sessions'
})


// Configure Sessions Middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    //store session on mongodb instead of locally
    store: sessionStore,
    cookie: { maxAge:  1000 * 60 * 60 } // 1 hour
  }));
  
  //passport middleware
  //initialize passport for use
  //allows user to be tracked with sessions (stay logged in)
  //must be initialized before routes so it can be used in router
  app.use(passport.initialize());
  app.use(passport.session());
  
  //to use with session. This is the serialize and deserialize user method from passport-local-mongoose
  passport.serializeUser(function (user, cb) {
      cb(null, user.id);
    });
    passport.deserializeUser(function (id, cb) {
      User.findById(id, function (err, user) {
        if (err) {
          return cb(err);
        }
        cb(null, user);
      });
    });

    //function for verifying req.body pass with the hash
function validPassword(password, hash, salt) {
    var hashVerify = crypto
      .pbkdf2Sync(password, salt, 10000, 64, "sha512")
      .toString("hex");
    return hash === hashVerify;
  }

//passport localstrategy, verifying users using username and password
passport.use(
    new LocalStrategy(function (username, password, cb) {
      User.findOne({ username: username })
        .then((user) => {
          if (!user) {
            return cb(null, false);
          }
          const isValid = validPassword(password, user.hash, user.salt);
          if (isValid) {
            return cb(null, user);
          } else {
            return cb(null, false);
          }
        })
        .catch((err) => {
          cb(err);
        });
    })
  );
  
app.use(morgan('common'));

var bodyParser = require('body-parser');

app.use(bodyParser.json({limit:"7mb"})); // for parsing application/json, increase the limit to send json (url encoded image)
app.use(bodyParser.urlencoded({ limit: "7mb", extended: true })); // for parsing application/json, increase the limit to send json (url encoded image)

app.use('/users/', userRoutes)
app.use('/diary/', diaryRoutes)
