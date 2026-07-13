const express = require('express');
const { createUpdate, getUpdates } = require('../controllers/updateController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(getUpdates).post(protect, createUpdate);

module.exports = router;
