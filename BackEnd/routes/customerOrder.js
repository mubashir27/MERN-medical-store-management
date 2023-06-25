const express = require('express');
const { postOrder, getOrder, getSpecificOrder } = require('../controllers/customerOrder');
const { validateOrder } = require('../middleware/validation/order.validation');

const router = express.Router();

router.post('/new', validateOrder, postOrder);
router.get('/allOrders', getOrder);
router.get('/:id', getSpecificOrder);

module.exports = router;
