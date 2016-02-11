var Occur = require('../db/model.js');

var controller = {};

controller.sendButtonData = function(req,res) {
  console.log("this request body for post in controller looks like: ", req.body)
  var currentDate = Date.now()
  //this is going to depend on what the client side req body looks like
  var buttonData = new Occur({ user: req.body.user, date: currentDate});

  buttonData.save(function(err, newButtonData) {
    console.log('hey we got here');
    if(err) {
      res.send(500, err);
    } else {
      console.log('hey the save worked for: ', newButtonData);
      res.send(200,newButtonData);
    }
  });
};


controller.retrieveStats = function(req,res) {
  console.log("this request body for get in controller looks like: ", req.body)

  Occur.find({user:req.body.user}).exec(function(err,found) {
    if(err) {
      res.send(404, err);
    } else {
      console.log("The data we retrieved looks like: ", found);
      res.send(200, found);
    }     
  });





};



module.exports = controller;