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
                        var planetImage = body.url;
                        if (!planetImage)
                            planteImage = 'http://kingofwallpapers.com/mountain-view/mountain-view-005.jpg';
                         res.render('test',
                            {
                                title: 'View for testing purposes',
                                planet: planet,
                                planetImage: planetImage
                            });
                    },'2017-03-21');
                    });

  return router;
}