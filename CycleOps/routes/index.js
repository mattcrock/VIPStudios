var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res) {
  res.render('index', { title:'Home', currentURL:'/index/'}
   );
});

router.get('/about/team/', function(req, res){
  res.render('aboutTeam', { title:'About Us', currentURL:'/about/team/'}
   )
})

router.get('/about/careers/', function(req, res){
  res.render('aboutCareers', { title:'About Us', currentURL:'/about/careers/'}
   )
})

router.get('/about', function(req, res){
  res.render('aboutTeam', { title:'About Us', currentURL:'/about/team'}
   )
})


router.get('/studio', function(req, res){
  res.render('studio', { title:'Studio', currentURL:'/studio/classes'}
   )
})

router.get('/classes', function(req, res){
  res.render('classes', { title:'Classes', currentURL:'/classes/'}
   )
})

router.get('/news', function(req, res){
  res.render('news', { title:'News', currentURL:'/news/'}
   )
})

router.get('/contact', function(req, res){
  res.render('contact', { title:'Contact Us', currentURL:'/contact/'}
  )
})

module.exports = router;
