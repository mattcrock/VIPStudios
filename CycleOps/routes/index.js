var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title:'Home', currentURL:'/index/'})
})

router.get('/index', function(req, res) {
  res.render('index', { title:'Home', currentURL:'/index/'}
   );
});

router.get('/about/team', function(req, res){
  res.render('\\about\\team', { title:'About Us', currentURL:'/about/team/'}
   )
})

router.get('/about/careers', function(req, res){
  res.render('\\about\\careers', { title:'About Us', currentURL:'/about/careers/'}
   )
})

router.get('/about', function(req, res){
  res.render('\\about\\team', { title:'About Us', currentURL:'/about/team/'}
   )
})

router.get('/studio/vipstudios', function(req, res){
  res.render('\\studio\\vipstudios', { title:'VIP Studio', currentURL:'/studio/vipstudios/'}
   )
})

router.get('/studio/vvipstudios', function(req, res){
  res.render('\\studio\\vvipstudios', { title:'VVIP Studios', currentURL:'/studio/vvipstudios/'}
   )
})

router.get('/studio/galery', function(req, res){
  res.render('\\studio\\galery', { title:'Galery', currentURL:'/studio/galery/'}
   )
})

router.get('/studio/bikefitment', function(req, res){
  res.render('\\studio\\bikefitment', { title:'Bike Fitment', currentURL:'/studio/bikefitment/'}
   )
})

router.get('/classes/bookings', function(req, res){
  res.render('\\classes\\bookings', { title:'Bookings', currentURL:'/classes/bookings/'}
   )
})

router.get('/classes/cancellations', function(req, res){
  res.render('\\classes\\cancellations', { title:'Cancellations', currentURL:'/classes/cancellations/'}
   )
})

router.get('/classes/faq', function(req, res){
  res.render('\\classes\\faq', { title:'FAQ', currentURL:'/classes/faq/'}
   )
})

router.get('/classes/giftcards', function(req, res){
  res.render('\\classes\\giftcards', { title:'Gift Cards', currentURL:'/classes/giftcards/'}
   )
})

router.get('/classes/instructors', function(req, res){
  res.render('\\classes\\instructors', { title:'Instructors', currentURL:'/classes/instructors/'}
   )
})

router.get('/classes/packages', function(req, res){
  res.render('\\classes\\packages', { title:'Packages', currentURL:'/classes/packages/'}
   )
})

router.get('/classes/refferals', function(req, res){
  res.render('\\classes\\refferals', { title:'Refferals', currentURL:'/classes/refferals/'}
   )
})

router.get('/classes', function(req, res){
  res.render('\\classes\\classes', { title:'Classes', currentURL:'/classes/'}
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
