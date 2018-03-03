const mongoose = require('mongoose');
// var { Schema } = mongoose;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.PROD_MONGODB);

module.exports = { mongoose };