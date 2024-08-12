const Dept = require('../models/request.model.js');

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err){
      res.sendStatus(403);
    }else{
      Dept.find()
      .then(request => {
        res.send(request);
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving request."
        });
      });
    }
  })
};
