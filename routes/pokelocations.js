/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 14-Apr-16 3:10 PM
 */
module.exports = function(router, Pokemon,PokeLocation, hresp) {
//Create and get all locations
    router.route('/pokemonlocations')
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

    //Get a location
    router.route('/pokemons/:pokemon_id')
        .get(function(req, res){
            Pokemon.findById(req.params.pokemon_id, function(err, pokemon){
                if(err){
                    hresp.ErrorFind(res, err);
                    return;
                }
                hresp.SuccessFind(res, pokemon);
            });
        })
        //update a location
        .put(function(req, res){
            Pokemon.findById(req.params.pokemon_id, function(err, pokemon){
                if(err) {
                    hresp.ErrorUpdate(res, err);
                    return;
                }

                pokemon.name = req.body.name;
                pokemon.order = req.body.order;

                pokemon.save(function(err){
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
