var express = require('express')
var bodyParser = require('body-parser')
var usersCtrl = require('./usersCtrl.js')
//do I need this one?
var users = require('./userData.json')

var app = express()
var port = 3000

app.use(bodyParser.json());

app.get('/api/users', usersCtrl.getAll);
app.get('/api/users/:userId', usersCtrl.getUser);
app.get('/api/admins', usersCtrl.getAdmins);
app.get('/api/nonadmins', usersCtrl.getNonAdmins);
app.get('/api/user_type/:userType', usersCtrl.getTypes);
app.put('/api/users/:userId', usersCtrl.putId);
app.post('/api/users/', usersCtrl.postUser);
app.delete('/api/users/:userId', usersCtrl.deleteUser);

app.listen(port, function(){
  console.log("working")
});
