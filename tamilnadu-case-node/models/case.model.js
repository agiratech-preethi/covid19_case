const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const covidCase = new Schema({
    Id: { type: Number },
    RawContent: { type: String },
    CaseNumber: { type: String },
    Age: { type: String },
    Gender: { type: String },
    District: { type: String },
    DeathCause: { type: String },
    admitted_on: { type: String },
    died_on: { type: String },
    sample_taken_on: { type: String },
    result_on: { type: String },
    brought_dead: { type: String },
    home_death: { type: String },
    comorbidity: { type: String },
    diabetes: { type: String },
    hypertension: { type: String },
    kidney: { type: String },
    heart: { type: String }

});

let ShemaCase = mongoose.model('tamilnaduCovidCase', covidCase, 'tamilnaduCovidCase');
module.exports = ShemaCase;

