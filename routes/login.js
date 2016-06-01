/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 01-Jun-16 2:41 PM
 */
module.exports = function(router,User) {
    router.route('/login')
        .get(function (req, res) {
            res.render('login',
                {
                    title: 'Log in'
                });
        });
    return router;
}