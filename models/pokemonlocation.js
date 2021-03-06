/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 01-Apr-16 2:02 PM
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PokemonLocation   = new Schema({
    name:{type: String, required: true},
    pokemon: [{
        type : Schema.Types.ObjectId, ref: 'Pokemon'
    }],
    location : {
        type:[Number],
        index:'2d'
    }
});

module.exports = mongoose.model('PokemonLocation', PokemonLocation);