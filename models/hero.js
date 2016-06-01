/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 31-Mar-16 1:36 PM
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var HeroSchema   = new Schema({
    name: {type: String, required: true, unique:true},
    order : {type: Number,required: true, unique:true},
    type : {type: String,required: true, unique:true}
});

module.exports = mongoose.model('Hero', HeroSchema);
