const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5a989d4a7d84262e0440a1d0';

// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found.');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('5a99b5e732b0dccae78468e5').then((user) => {
    if (!user) {
        return console.log('Unable to find user.');
    }
    console.log('User By Id', JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});