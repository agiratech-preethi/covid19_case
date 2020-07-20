const express = require('express');
const router = express.Router();
// call for controller 
const case_controller = require('../controller/case.controller');
router.post('/createCase', case_controller.case_create);
router.get('/getCases', case_controller.get_Case);
router.put('/updateCase/:id', case_controller.update_Case);
router.delete('/delete/:id', case_controller.delete_Case);

module.exports = router;