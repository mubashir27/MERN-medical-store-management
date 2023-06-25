const express = require('express');
const { getAllMedicines, postMedicine } = require('../controllers/medicines');
const { validateMedicines } = require('../middleware/validation/medicine.validation');
const router = express.Router();

router.post('/', validateMedicines, postMedicine);
router.get('/', getAllMedicines);

module.exports = router;
