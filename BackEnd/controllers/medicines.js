const asyncHandler = require('express-async-handler');
const medicineModal = require('../models/medicine.schema');

const postMedicine = asyncHandler(async (req, res) => {
    const { mediName, mediNo, quantity, mfgDate, expDate } = req.body;
    const medicine = await medicineModal.create({
        mediName,
        mediNo,
        quantity,
        mfgDate,
        expDate,
        // medicine_id: req.medicine.id,
    });
    res.status(200).json(medicine);
});

const getAllMedicines = asyncHandler(async (req, res) => {
    const Medicine = await medicineModal.find();
    res.status(200).json(Medicine);
});

module.exports = { getAllMedicines, postMedicine };
