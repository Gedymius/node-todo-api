const mongoose = require('mongoose');
// var { Schema } = mongoose;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };