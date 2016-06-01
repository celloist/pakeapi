/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 01-Jun-16 3:47 PM
 */
module.exports = {

    'facebookAuth' : {
        clientID      : '257578534580231', // your App ID
        clientSecret  : '2bf736b0a67a0702d99e7b52308233a3', // your App Secret
        callbackURL   : 'https://pakeapi.herokuapp.com/auth/facebook/callback',
        profileFields : ['id', 'email', 'name'],
        scope         : ['email']
    },

    'googleAuth' : {
        'clientID'      : '171265629189-m2i25o3tm3a1f9sej4erotr49g9v07jo.apps.googleusercontent.com',
        'clientSecret'  : '-u-7_nyPU52Rkshr0nhguZt4',
        'callbackURL'   : 'https://pakeapi.herokuapp.com/auth/google/callback'
    }

};