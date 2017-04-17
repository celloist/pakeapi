/**
 * Created by alhricl on 4/16/2017.
 */
var pokeNode = require('pokenode');

var pokeApi = function(){
};

pokeApi.prototype.getPokemon = function(index,callback) {
    var pokemon = {};
    var error;
    pokeNode.pokemon((index), function (err, data) {
        if(err)
            error =  err;
        else {
            pokemon.name = data.name;
            pokemon.id = data.pkdx_id;
            pokemon.species = data.species;
        }
        callback(pokemon,error);
    });
};

module.exports = pokeApi;


