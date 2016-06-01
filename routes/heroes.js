/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 31-Mar-16 2:36 PM
 */
module.exports = function(router, Hero, hresp) {
//Create and get all heroes
    router.route('/heroes')
        .post(function(req, res){
            var hero = new Hero();
            hero.name = req.body.name;
            hero.order= req.body.order;


            hero.save(function(err){
                if(err){
                    hresp.ErrorSaving(res, err);
                    return;
                }
                hresp.SuccessSaving(res, hero);
            });
        })
        .get(function(req, res){
            Hero.find(function(err, hero){
                if(err){
                    hresp.ErrorFind(res, err);
                    return;
                }
                hresp.SuccessFind(res, hero);
            });
        });

    //Get a hero
    router.route('/heroes/:hero_id')
        .get(function(req, res){
            Hero.findById(req.params.hero_id, function(err, hero){
                if(err){
                    hresp.ErrorFind(res, err);
                    return;
                }
                hresp.SuccessFind(res, hero);
            });
        })
        //update a hero
        .put(function(req, res){
            Hero.findById(req.params.hero_id, function(err, hero){
                if(err) {
                    hresp.ErrorUpdate(res, err);
                    return;
                }

                hero.name = req.body.name;
                hero.order = req.body.order;
                hero.type = req.body.type;

                hero.save(function(err){
                    if(err){
                        hresp.ErrorSaving(res, err);
                        return;
                    }

                    hresp.SuccessUpdate(res);
                });
            });
        })
        //delete a hero
        .delete(function(req, res){

            Hero.findByIdAndRemove({
                _id: req.params.id
            }, function(err, hero){
                if(err){
                    hresp.ErrorDelete(res, err);
                    return;
                }
                hresp.SuccessDelete(res);
            });
        });

    return router;
};
