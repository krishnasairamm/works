const Cust = require('../models/cust.model.js');

exports.findAll = (req, res) => {
Cust.find()
  .then(users => {
  res.send(users);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while getting list of users."
});
});
};

exports.create = (req, res) => {
if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}

const user = new Cust({
  cid: req.body.id,
  caadhar: req.body.caadhar,
  cpan: req.body.cpan,
  cdob: req.body.cdob
});

user.save()
  .then(data => {
  res.send(data);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while creating new user."
});
});
};

exports.findOne = (req, res) => {
Cust.findById(req.params.id)
  .then(user => {
  if(!user) {
   return res.status(404).send({
   message: "User not found with id " + req.params.id
 });
}
 res.send(user);
}).catch(err => {
  if(err.kind === 'ObjectId') {
    return res.status(404).send({
    message: "User not found with id " + req.params.id
  });
}
return res.status(500).send({
  message: "Error getting user with id " + req.params.id
});
});
};

exports.update = (req, res) => {
if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}

Cust.findByIdAndUpdate(req.params.id, {
  cid: req.body.id,
  caadhar: req.body.caadhar,
  cpan: req.body.cpan,
  cdob: req.body.cdob
}, {new: true})
.then(user => {
 if(!user) {
   return res.status(404).send({
   message: "user not found with id " + req.params.id
 });
}
res.send(user);
}).catch(err => {
if(err.kind === 'ObjectId') {
  return res.status(404).send({
  message: "user not found with id " + req.params.id
});
}
return res.status(500).send({
  message: "Error updating user with id " + req.params.id
});
});
};

exports.delete = (req, res) => {
Cust.findById(req.params.id)
.then(user => {
if(!user) {
  return res.status(404).send({
  message: "user not found with id " + req.params.id
});
}
res.send({message: "user deleted successfully!"});
}).catch(err => {
if(err.kind === 'ObjectId' || err.name === 'NotFound') {
  return res.status(404).send({
  message: "user not found with id " + req.params.id
});
}
return res.status(500).send({
  message: "Could not delete user with id " + req.params.id
});
});
};