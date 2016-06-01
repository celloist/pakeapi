/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 14-Apr-16 3:10 PM
 */
module.exports = function(router, Hero,HeroLocation, hresp) {
//Create and get all locations
    router.route('/herolocations')
        .post(function(req, res){
            var herolocation = new HeroLocation();
            herolocation.name = req.body.name;
            herolocation.hero= req.body.hero_id;
            herolocation.location = req.body.location


            herolocation.save(function(err){
                if(err){
                    hresp.ErrorSaving(res, err);
                    return;
                }
                hresp.SuccessSaving(res, herolocation);
            });
        })
        .get(function(req, res){
            HeroLocation.find(function(err, herolocation){
                if(err){
                    hresp.ErrorFind(res, err);
                    return;
                }
                hresp.SuccessFind(res, herolocation);
            });
        });

    //Get a location
    router.route('/herolocations/:herolocation_id')
        .get(function(req, res){
            HeroLocation.findById(req.params.herolocation_id, function(err, herolocation){
                if(err){
                    hresp.ErrorFind(res, err);
                    return;
                }
                hresp.SuccessFind(res, herolocation);
            });
        })
        //update a location
        .put(function(req, res){
            HeroLocation.findById(req.params.herolocation_id, function(err, herolocation){
                if(err) {
                    hresp.ErrorUpdate(res, err);
                    return;
                }

                herolocation.name = req.body.name;
                herolocation.hero = req.body.hero_id;
                herolocation.lcoation = req.body.location;
                
                herolocation.save(function(err){
                    if(err){
                        hresp.ErrorSaving(res, err);
                        return;
                    }

                    hresp.SuccessUpdate(res);
                });
            });
        })
        //delete a location
        .delete(function(req, res){

            HeroLocation.findByIdAndRemove({
                _id: req.params.id
            }, function(err, herolocation){
                if(err){
                    hresp.ErrorDelete(res, err);
                    return;
                }
                hresp.SuccessDelete(res);
            });
        });

    return router;
};
