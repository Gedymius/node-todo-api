const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '';

if (id==='') {
	return console.log('To make it work you must provide existing Object ID above');
}

// Todo.remove({}).then((result) => {
	// console.log(result);
// });

// uncomment one below

// Todo.findOneAndRemove({_id: id}).then((todo) => {
	// console.log(todo);	
// });

Todo.findByIdAndRemove(id).then((todo) => {
	console.log(todo);
});