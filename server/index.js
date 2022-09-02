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

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));






