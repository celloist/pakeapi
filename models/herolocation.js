/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 01-Apr-16 2:02 PM
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var HeroLocationSchema   = new Schema({
    name:{type: String, required: true},
    hero: {type : Schema.Types.ObjectId, ref: 'Hero', required: true, unique:true},
    location : {
        type:[Number],
        index:'2d'
    }
});

module.exports = mongoose.model('HeroLocation', HeroLocationSchema);