const User = require('../models/user.model.js');

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err){
      res.sendStatus(403);
    }else{
      User.find()
      .then(user => {
        res.send(user);
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving user."
        });
      });
    }
  })
};
