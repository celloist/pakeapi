/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 01-Jun-16 3:47 PM
 */
module.exports = {

    'facebookAuth' : {
        clientID      : '1556949461274774', // your App ID
        clientSecret  : '448650dbf8f368a1e01ef54656bafdc2', // your App Secret
        callbackURL   : 'https://pakeapi.herokuapp.com/auth/facebook/callback',
        profileFields : ['id', 'email', 'name'],
        scope         : ['email']
    },

    'googleAuth' : {
        'clientID'      : '169520129672-57ivuv0ueekhbmqoiu5bspbt5elcthg4.apps.googleusercontent.com',
        'clientSecret'  : 'Enqp6M3LrnA_RjvJVibdpB2d',
        'callbackURL'   : 'https://pakeapi.herokuapp.com/auth/google/callback'
    }

};