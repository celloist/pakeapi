module.exports = function(router,User,PokemonLocation,Pokemon,NASA) {
  router.route('/')
      .get(function (req, res) {
        res.render('index',
            {
              title: 'Welcome to my Pokemon api'
            });
      });
    router.route('/apod')
        .get(function (req, res) {
            res.render('apod',
                {
                    title: 'Please pick a date'
                });
        });
    router.route('/apod/:date')
        .get(function (req, res) {
            var date = req.params.date;
                    NASA.Apod(function(body,err) {

                        var planet = body.explanation;
                        var planetImage = body.url;
                        var title = body.title;

                         res.render('test',
                            {
                                title: title,
                                planet: planet,
                                planetImage: planetImage
                            });
                    },date);
                    });

  return router;
};