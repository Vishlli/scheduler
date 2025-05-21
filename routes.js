const express = require('express');
const router = express.Router();
const schedulerController = require('../controllers/schedulerController');

router.get('/', schedulerController.renderInputForm);
router.post('/schedule', schedulerController.generateSchedule);

module.exports = router;
