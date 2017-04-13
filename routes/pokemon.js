/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 31-Mar-16 2:36 PM
 */
module.exports = function(router, Pokemon, hresp) {
//Create and get all pokemons
    router.route('/pokemon')
        //save a pokemon
        .post(function(req, res){
            var pokemon = new Pokemon();
            pokemon.name = req.body.name;
            pokemon.order= req.body.order;


            pokemon.save(function(err){
                if(err){
                    hresp.ErrorSaving(res, err);
                    return;
                }
                hresp.SuccessSaving(res, pokemon);
            });
        })
        .get(function(req, res){
            Pokemon.find(function(err, pokemon){
                if(err){
                    hresp.ErrorFind(res, err);
                    return;
                }
                hresp.SuccessFind(res, pokemon);
            });
        });

    //Get a pokemon
    router.route('/pokemon/:pokemon_id')
        .get(function(req, res){
            Pokemon.findById(req.params.pokemon_id, function(err, pokemon){
                if(err){
                    hresp.ErrorFind(res, err);
                    return;
                }
                hresp.SuccessFind(res, pokemon);
            });
        })
        //update a pokemon
        .put(function(req, res){
            Pokemon.findById(req.params.pokemon_id, function(err, pokemon){
                if(err) {
                    hresp.ErrorUpdate(res, err);
                    return;
                }

                pokemon.name = req.body.name;
                pokemon.order = req.body.order;
                pokemon.type = req.body.type;

                pokemon.save(function(err){
                    if(err){
                        hresp.ErrorSaving(res, err);
                        return;
                    }

                    hresp.SuccessUpdate(res);
                });
            });
        })
        //delete a pokemon
        .delete(function(req, res){

            Pokemon.findByIdAndRemove({
                _id: req.params.id
            }, function(err, pokemon){
                if(err){
                    hresp.ErrorDelete(res, err);
                    return;
                }
                hresp.SuccessDelete(res);
            });
        });

    return router;
};
