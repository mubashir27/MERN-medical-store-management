const asyncHandler = require('express-async-handler');

const postOrder = asyncHandler(async (req, res) => {
    const { cusName, phoneNo, age, timing, medcinePerDay, quantity, str } = req.body;
    console.log('customer_name', cusName, phoneNo, age, timing, medcinePerDay, quantity, str);
    return res.status(200).json({ message: { cusName, phoneNo, age, timing, medcinePerDay, quantity, str } });
});

const getOrder = asyncHandler(async (req, res) => {
    return res.status(200).json({ message: 'order list ' });
});

const getSpecificOrder = asyncHandler(async (req, res) => {
    return res.status(200).json({ message: 'order wlist ' });
});

module.exports = { postOrder, getOrder, getSpecificOrder };
