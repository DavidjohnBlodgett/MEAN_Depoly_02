var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = mongoose.Schema({
    name: { type: String },
    question: { type: String },
    option1: {
        content: String,
        votes: Number
    },
    option2: {
        content: String,
        votes: Number
    },
    option3: {
        content: String,
        votes: Number
    },
    option4: {
        content: String,
        votes: Number
    }
},{ timestamps: true });

// third param overrides mongo default collection names...
var Poll = mongoose.model('Poll', PollSchema, 'polls');



// option1: {
//     content: { type: String },
//     votes: { type: Number }
// },
// option2: {
//     content: { type: String },
//     votes: { type: Number }
// },
// option3: {
//     content: { type: String },
//     votes: { type: Number }
// },
// option4: {
//     content: { type: String },
//     votes: { type: Number }
// }
