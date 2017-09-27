var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');


module.exports = {
    create: function(req, res, next) {
        var poll = new Poll(req.body);
        poll.save(function(err) {
            if(err){
                console.log('error writting to the db');
                console.log(err);
            }else {
                res.json(true);
            }

        });
    },
    update: function(req, res, next) {
        Poll.find({},function(err, poll) {

            // req.body._id?
            // TODO: pass in new values then save...
            console.log(poll);

            //
            // poll.save(function(err) {
            //     if(err){
            //         console.log('error writting to the db');
            //         console.log(err);
            //     }else {
            //         res.json(true);
            //     }
            //
            // });
            // res.json(poll);
        });




    },
    readAll: function(req, res, next) {
        Poll.find({},function(err, polls) {
            res.json(polls);
        });
    },
    delete: function(req, res, next) {
        // NOTE: this may need to be using req.body.id...
        Poll.deleteOne({ _id: req.params.id },function(err) {
        // Poll.deleteOne({ _id: req.body.id },function(err) {
            if(err){
                console.log('something went wrong with the delete...');
                res.json(false);
            }else {
                res.json(true);
            }
        });
    },


}
