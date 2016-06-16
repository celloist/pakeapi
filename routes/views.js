module.exports = function(router,User,HeroLocation,Hero,NASA,async) {
  router.route('/')
      .get(function (req, res) {
        res.render('index',
            {
              title: 'Welcome to my dota api'
            });
      });
    router.route('/test')
        .get(function (req, res) {
            var planet ="fuck async";
                    NASA.Apod(function(body,err) {
                        console.log(body);
                        planet = body.explanation;
                        console.log(body.url);
                        var planetImage = body.url
                         res.render('test',
                            {
                                title: 'View for testing purposes',
                                planet: planet,
                                planetImage: planetImage
                            });
                    },'2016-03-22');
                    });

  return router;
}