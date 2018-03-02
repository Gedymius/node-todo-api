const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove

Todo.findOneAndRemove({_id: '5a99e04532b0dccae78473c7'}).then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5a99e04532b0dccae78473c7').then((todo) => {
    console.log(todo);
});