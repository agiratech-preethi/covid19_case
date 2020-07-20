const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const covidCase = new Schema({
    Id: { type: Number },
    RawContent: { type: String },
    CaseNumber: { type: Number },
    Age: { type: Number },
    Gender: { type: String },
    District: { type: String },
    DeathCause: { type: String }
});

let ShemaCase = mongoose.model('tamilnaduCase', covidCase, 'tamilnaduCase');
module.exports = ShemaCase;