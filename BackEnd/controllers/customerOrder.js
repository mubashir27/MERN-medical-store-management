const asyncHandler = require('express-async-handler');

const postOrder = asyncHandler(async (req, res) => {
    const { cusName, phoneNo, quantity, price } = req.body;
    console.log('customer_name', cusName, phoneNo, quantity, price);
    return res.status(200).json({ message: { cusName, phoneNo, quantity, price } });
});

const getOrder = asyncHandler(async (req, res) => {
    return res.status(200).json({ message: 'order list ' });
});

const getSpecificOrder = asyncHandler(async (req, res) => {
    return res.status(200).json({ message: 'order wlist ' });
});

module.exports = { postOrder, getOrder, getSpecificOrder };
