var users = require('./userData.json');

module.exports={

  getAll: (req, res) =>{
    if(!req.query){
    return res.status(200).send(users);
  }

  else{
    var key=Object.keys(req.query)
    var firstKey=key[0];
    var value=req.query[key]

    if(firstKey=='favorites'){
    var allFavorites=[];
    for(var i=0; i<users.length; i++){
      if(users[i][firstKey].indexOf(value) !== -1){
        allFavorites.push(users[i])
      }
    }
    return res.status(200).send(allFavorites)
  }

  else if(firstKey==='age'){
    var numberr=parseInt(value)

    console.log(users[0].age)
    console.log(typeof numberr)

    var allAges=[];
    for(var i=0; i<users.length; i++){
      if(users[i].age<numberr){
        allAges.push(users[i]);
      }
    }
    return res.status(200).send(allAges)
  }

  else if(firstKey==='lastname'){
    var allLastnames=[];
    for(var i=0; i<users.length; i++){
      if(users[i].last_name==value){
        allLastnames.push(users[i])
      }
    }
    return res.status(200).send(allLastnames)
  }

  else if(firstKey==='email'){
    for(var i=0; i<users.length; i++){
      if(users[i].email===value){
        return res.status(200).send(users[i])
      }
    }
  }
}
},

getUser: (req, res)=>{
  var numm=parseInt(req.params.userId)

  for(var i=0; i<users.length; i++){
    if(users[i].id===numm){
      return res.status(200).send(users[i])
    }
  }
  return res.status(404).json(null)
},

getAdmins: (req, res)=>{
var admins=[];

for(var i=0; i<users.length; i++){
  if(users[i].type==='admin'){
    admins.push(users[i])
  }
}
return res.status(200).send(admins)
},

getNonAdmins: (req, res)=>{
var nonadmins=[];

for(var i=0; i<users.length; i++){
  if(users[i].type!=='admin'){
    nonadmins.push(users[i])
  }
}
return res.status(200).send(nonadmins)
},

getTypes: (req, res)=>{

  var types=[];
  console.log(req.params.userType)

  for(var i=0; i<users.length; i++){
    if(users[i].type===req.params.userType){
      types.push(users[i])
    }
  }
  return res.status(200).send(types)

},

putId: (req,res)=>{
  console.log(req.body)
  var numberId=parseInt(req.params.userId)
  for(var i=0; i<users.length; i++){
    if(users[i].id===numberId){
      users[i]=req.body;
      console.log(users[i])
      return res.status(200).send(users);

    }

  }
},

postUser: (req, res)=>{
  var newId=users.length+1;

  req.body.id=newId;

  users.push(req.body)

  return res.status(200).send(users);
},

deleteUser: (req, res)=>{
  var numb=parseInt(req.params.userId)
  for(var i=0; i<users.length; i++){
    if(users[i].id===numb){
      users.splice(i,1)
    }
  }
  return res.status(200).send(users);
}

}
