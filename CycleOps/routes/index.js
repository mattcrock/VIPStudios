var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET HelloWorld page. */
router.get('/helloworld', function(req, res){
  res.render('helloworld', {title: 'Hello, World!' })
});

/*GET Userlist page. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function(e, docs) {
    res.render('userlist', {
      "userlist": docs
    });
  });
});

/*GET the add user form. */
router.get('/newuser', function(req, res) {
  res.render('newuser', {title: 'Add new user' });
});

/*POST the new user to the DB. */
router.post('/adduser', function(req, res) {
  var db = req.db;

  var username = req.body.username;
  var useremail = req.body.username;
  var collection = db.get('usercollection');

  collection.insert({
      "username" : username,
      "email" : useremail
  }, function (err, doc) {
    if(err) {
      res.send("There was a problem add ing the information to the database.");
    }
    else {
      res.location("userlist");
      res.redirect("userlist");
    }
  })
})

/*GET edit form */
router.get('/updateuser/:username', function(req, res) {
  var db = req.db;
  var user = db.get('usercollection').findOne({'username': req.params.username}, function (err, doc){
    if(err){
      res.send("There was a problem fetching that user form the db.");
    } else {
      console.log(doc)
      res.render('updateuser',{
        "user": doc,
        title: 'Update existing user'
      });
    }
  });
});

/*PUT the edit user put method */
router.post('/edituser', function(req, res) {
  var db = req.db;

  var username = req.body.username;
  var updatedUserEmail = req.body.useremail;
  var collection = db.get('usercollection');

  collection.update({"username": username},
    {$set : {"email": updatedUserEmail} }, function (err, doc) {
    if(err) {
      res.send("There was a problem updating the user data");
    } else {
      res.location("userlist");
      res.redirect("userlist");
    }
  })
})

module.exports = router;
