/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 10-Jun-16 3:37 PM
 */


var request = require('request');
var STARTURI = 'https://api.nasa.gov/';

var DEFAULTS = {
    api_key: 'DEMO_KEY',
    concept_tags:true
};

var NASA = function(api_key) {
    var self = this;
    self.api_key = api_key || DEFAULTS.api_key
};


NASA.prototype.Apod = function(callback,date,hd){
    var url = STARTURI +'planetary/apod';
    var qs = {
        api_key: this.api_key,
        date: date ||'1996-06-16',
        hd:  hd || false,
        concept_tags:  DEFAULTS.concept_tags

    };

    request.get({url:url, qs:qs}, function(err, res, body){
        var parsed = JSON.parse(body);
        if (parsed.error) {
            err = parsed.error;
        } else {
            body = parsed;
        }

        if (err|| res.statusCode !== 200) {
            err = res.statusCode;
        }
        
        callback(body,err);

});
};

NASA.prototype.Asteroids = function(){};
NASA.prototype.Aeonet = function(){};
NASA.prototype.Earth = function() {};
NASA.prototype.MarsRover = function(){};
NASA.prototype.Patents = function(){};
NASA.prototype.Sounds = function(){};
NASA.prototype.Trek = function(){};

module.exports = NASA;