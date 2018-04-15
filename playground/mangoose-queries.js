const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ad3d0870bbcd4312802e30a11111';

if (!ObjectID.isValid(id)) {
	console.log('Id not valid');
} else {
	// Todo.find({
		// _id : id
	// }).then((todos) => {
		// console.log('Todos: ', todos);
	// });

	// Todo.findOne({
		// _id : id
	// }).then((todo) => {
		// console.log('Todo: ', todo);
	// });

	Todo.findById(id).then((todo) => {
		if (!todo) return console.log('Id not found!');
		console.log('Todo By Id: ', todo);
	}).catch((e) => console.log(e.message));
}

/*  var email = 'nobody@nomail.com';
  var user = new User({email});

  
  user.save().then((doc) => {
    console.log('New user id: ',doc._id);
  }, (e) => console.log(e));
*/
var uid = '5ad3d582ea42f525708857d3';

User.findById(uid).then((user) => {
	if (!user) return console.log('User not found');
	console.log('User: ', user);
}).catch((e) => console.log(e.message));

