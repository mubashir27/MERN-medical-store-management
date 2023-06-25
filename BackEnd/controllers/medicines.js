const asyncHandler = require('express-async-handler');

const postMedicine = asyncHandler(async (req, res) => {
    const { mediNo, quantity, mfgDate, expDate } = req.body;
    console.log('exp_name', mediNo, quantity, mfgDate, expDate);
    return res.status(200).json({ message: { mediNo, quantity, mfgDate, expDate } });
});

const getAllMedicines = asyncHandler(async (req, res) => {
    return res.status(200).json({ message: 'medicine list ' });
});

module.exports = { getAllMedicines, postMedicine };
