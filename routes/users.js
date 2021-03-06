/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 31-Mar-16 1:34 PM
 */
module.exports = function(router, User, hresp) {
    /*
     * GET userlist.
     */
    router.route('/users')
        .post(function(req, res){
            var user = new User();
            user.name = req.body.name;
            user.password = req.body.password;
            user.role = req.body.role;


            user.save(function(err){
                if(err){
                    hresp.ErrorSaving(res, err);
                    return;
                }
                hresp.SuccessSaving(res, user);
            });
        })
        .get(function(req, res){
            User.find(function(err, user){
                if(err){
                    hresp.ErrorFind(res, err);
                    return;
                }
                hresp.SuccessFind(res, user);
            });
        });

    router.route('/users/:user_id')
        .get(function(req, res){
            User.findById(req.params.user_id, function(err, user){
                if(err){
                    hresp.ErrorFind(res, err);
                    return;
                }
                hresp.SuccessFind(res, user);
            });
        })
        .put(function(req, res){
            User.findById(req.params.user_id, function(err, user){
                if(err) {
                    hresp.ErrorUpdate(res, err);
                    return;
                }

                user.name = req.body.name;
                user.password = req.body.password;
                user.role = req.body.role;

                user.save(function(err){
                    if(err){
                        hresp.ErrorSaving(res, err);
                        return;
                    }

                    hresp.SuccessUpdate(res);
                });
            });
        })
        .delete(function(req, res){

            User.findByIdAndRemove({
                _id: req.params.id
            }, function(err, user){
                if(err){
                    hresp.ErrorDelete(res, err);
                    return;
                }
                hresp.SuccessDelete(res);
            });
        });

    return router;
};
