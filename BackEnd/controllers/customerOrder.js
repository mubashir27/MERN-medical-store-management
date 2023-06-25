const asyncHandler = require('express-async-handler');
const orderModal = require('../models/order.schema');
const postOrder = asyncHandler(async (req, res) => {
    const { cusName, phoneNo, quantity, price } = req.body;
    const order = await orderModal.create({
        cusName,
        phoneNo,
        quantity,
        price,
        // medicine_id: req.order.id,
    });
    res.status(200).json(order);
});

const getOrder = asyncHandler(async (req, res) => {
    return res.status(200).json({ message: 'order list ' });
});

const getSpecificOrder = asyncHandler(async (req, res) => {
    return res.status(200).json({ message: 'order wlist ' });
});

module.exports = { postOrder, getOrder, getSpecificOrder };
