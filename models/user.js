/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 31-Mar-16 1:35 PM
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: {type: String, required: true, unique:true},
    email: {type:String, required:true, unique:true},
    password : {type: String,required: true},
    role: {type: Schema.Types.ObjectId, ref: 'role',required:true}
});

module.exports = mongoose.model('User', UserSchema);