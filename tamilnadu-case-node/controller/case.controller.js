const ShemaCase = require('../models/case.model');
const csv = require('csvtojson');
const { response } = require('express');
var mongoose = require('mongoose');
var paginate = require('paginate')({
    mongoose: mongoose
});
exports.case_create = function (req, res, next) {
  console.log('req', req.body);
  ShemaCase.count({}, function (err, count) {
    console.log('resconut', count);
    var caseData = {
      Id: count+1,
      RawContent: req.body.RawContent,
      CaseNumber: count+1,
      Age: req.body.Age,
      Gender: req.body.Gender,
      District: req.body.District,
      DeathCause: req.body.DeathCause,
      AdmittedOn: req.body.admitted_on,
      DiedOn: req.body.died_on,
      SampleTakenOn: req.body.sample_taken_on,
      ResultOn: req.body.result_on,
      BroughtDead: req.body.brought_dead,
      HomeDeath: req.body.home_death,
      Comorbidity: req.body.comorbidity,
      Diabetes: req.body.diabetes,
      Hypertension: req.body.hypertension,
      Kidney: req.body.kidney,
      Heart: req.body.heart
  
    }

    ShemaCase.create(caseData).then((responseData) => {
      if (responseData) {
        res.redirect('/home', {
          userValue : responseData});
        res.json({
          Message: 'success',
          data: responseData
        });
      }
    })
      .catch((err) => {
        res.status(400).send({ error: err.message });
      })
  })
}

exports.get_Case = function (req, res, next) {
  let page = parseInt(req.query.page);
  let limit = parseInt(req.query.limit);
  ShemaCase.find({}).skip(page).limit(limit)
    .then((response) => {
      let result = {...response}
      result.totalCount = response.length;
      result.perpage = limit;
        res.json({
        message: 'success',
        data: result
      });
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    })
};


exports.update_Case = function (req, res) {
  ShemaCase.findOneAndUpdate(req.params._id, {
    Id: req.body.Id,
    RawContent: req.body.RawContent,
    CaseNumber: req.body.CaseNumber,
    Age: req.body.Age,
    Gender: req.body.Gender,
    District: req.body.District,
    DeathCause: req.body.DeathCause,
    AdmittedOn: req.body.admitted_on,
    DiedOn: req.body.died_on,
    SampleTakenOn: req.body.sample_taken_on,
    ResultOn: req.body.result_on,
    BroughtDead: req.body.brought_dead,
    HomeDeath: req.body.home_death,
    Comorbidity: req.body.comorbidity,
    Diabetes: req.body.diabetes,
    Hypertension: req.body.hypertension,
    Kidney: req.body.kidney,
    Heart: req.body.heart

  }, { new: true, useFindAndModify: false }, function (err, result) {
    if (err) {
      res.status(400).send({ error: err.message });
    } else {
      res.status(200).send({
        data: result,
        msg: 'data updated successfully'
      });
    }
  });
};


exports.delete_Case = function (req, res) {
  ShemaCase.findByIdAndRemove(req.params._id
    , function (err, result) {
      if (err) {
        res.status(400).send({ error: err.message });
      } else {
        res.status(200).send({
          msg: 'Case has been deleted successfully'
        });

      };
    });
}

exports.upload_cases = function (req, res) {
  console.log('reqfiles', req.files.cases)
  csv()

    .fromString(req.files.cases.data.toString('utf8'))
    .then((jsonObj) => {
      console.log('jsonObj', jsonObj)
      ShemaCase.insertMany(jsonObj, (err, response) => {
        if (err) {
          res.status(400).send({ error: err.message });
        } else {
          res.status(200).send({
            msg: 'cases uploaded successfully',
            datasss: response
          });
        }
      })
    })
}
