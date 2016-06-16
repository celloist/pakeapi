/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 02-Jun-16 3:38 PM
 */
module.exports = function(router,User,passport) {
    router.route('/login')
        .get(function (req, res) {
            if(req.isAuthenticated())
            {
                res.redirect('/profile');
            }
            res.render('login',
                {
                    title: 'Log in',
                    message: req.flash('loginMessage')
                });
        })
        .post(passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

    router.route('/signup')
        .get(function(req,res){
            if(req.isAuthenticated())
            {
                res.redirect('/profile');
            }
            res.render('signup',
                {
                    title: 'Sign up',
                    message: req.flash('signupMessage')
                });
        })
        .post(function(req,res,next){
            next()},
            passport.authenticate('local-signup', {

                successRedirect : '/profile', // redirect to the secure profile section
                failureRedirect : '/signup', // redirect back to the signup page if there is an error
                failureFlash : true
        })
        );

    router.route('/profile')
        .get(isLoggedIn,function (req, res) {

                res.render('profile',
                    {
                        title: 'Profile',
                        user: req.user
                    });
        });

    router.route('/logout')
        .get(function (req, res) {
            req.logout();
            res.redirect('/');
        });

    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated()) {
            return next();
        }

        // if they aren't redirect them to the home page
        res.redirect('/login');
    }
    return router;
}