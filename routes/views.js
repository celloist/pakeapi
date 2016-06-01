module.exports = function(router,User,HeroLocation,Hero) {
  router.route('/')
      .get(function (req, res) {
        res.render('index',
            {
              title: 'Welcome to my dota api'
            });
      });
  return router;
}
