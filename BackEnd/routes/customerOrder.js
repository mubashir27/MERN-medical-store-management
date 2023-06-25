const express = require('express');
const { postOrder, getOrder, getSpecificOrder } = require('../controllers/customerOrder');

const router = express.Router();

router.post('/newOrder', postOrder);
router.get('/allOrders', getOrder);
router.get('/:id', getSpecificOrder);

module.exports = router;
