var polls = require('../controllers/polls')
const path = require('path');

module.exports = function(app) {

    /////////////////////////////
    // -- NOTE: BEGIN QUESTION ROUTES
    /////////////////////////////
    // CREATE
    app.post('/polls', (req, res, next) => {
        polls.create( req, res, next );
    });
    // READ
    app.get('/polls', (req, res, next) => {
        polls.readAll( req, res, next );
    });
    app.put('/polls', (req, res, next) => {
        polls.update( req, res, next );
    });
    app.delete('/polls/:id', (req, res, next) => {
        polls.delete( req, res, next );
    });
    /////////////////////////////
    // -- NOTE: END QUESTION ROUTES
    /////////////////////////////

    // keep this last...
    app.all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/index.html"))
    });
}
