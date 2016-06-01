/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 01-Jun-16 1:50 PM
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RoleSchema = new Schema({
    name: {type: String, required:true}
})

module.exports = mongoose.model('Role', RoleSchema);