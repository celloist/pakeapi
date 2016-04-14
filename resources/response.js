/**
 * @author Alhric Lacle <alhriclacle@gmail.com>
 * @project Pakeapi
 * @created 31-Mar-16 2:26 PM
 */
module.exports = {
    ErrorSaving: function(res, err) {
        res.status("ERROR").json({ message: err});
    },

    SuccessSaving: function(res, data) {
        res.status(201);
        res.json({status : "OK", message: "Object sucessfully created", data: data});
    },

    ErrorFind: function(res, err) {
        res.json({status : "ERROR", message: "Error during find", errorMessage: err});
    },

    SuccessFind: function(res, data) {
        res.status(200);
        res.json({status : "OK", message: "Find succesful", data: data});
    },

    ErrorUpdate: function(res, err) {
        res.json({status : "ERROR", message: "Error during update"});
    },

    SuccessUpdate: function(res, data) {
        res.status(200);
        res.json({status : "OK", message: "Update succes", data: data});
    },

    ErrorDelete: function(res, err) {
        res.json({status : "ERROR", message: "Failed to remove"});
    },

    SuccessDelete: function(res) {
        res.status(200);
        res.json({status : "OK", message: "Remove succes"});
    },

    CustomMessage: function(res, message) {
        res.status(200);
        res.json({status: "OK", data: message});
    },

    CustomErrorMessage: function(res, message) {
        res.json({status : "ERROR", message: message});
    },

    Unauthorized: function(res) {
        res.status(401);
        res.json({status : "Unauthorized", message: "Nice try hacker try again"});
    }

};
