const express = require('express');
const {
  createMario,
  getMario,
  getMarios,
  updateMario,
  deleteMario,
} = require('../controller/mario');

const router = express.Router();

router.route('/').get(getMarios).post(createMario);

router.route('/:id').get(getMario).patch(updateMario).delete(deleteMario);

module.exports = router;
