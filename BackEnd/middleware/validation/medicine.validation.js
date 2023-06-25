const { NAME_REGEX, PHONE_REGEX } = require('../../constants/regex');
const { ERRORS } = require('../../constants/errors');
const { STATUS } = require('../../constants/statusCodes');

const validateMedicines = (req, res, next) => {
    try {
        const { mediName, mediNo, quantity, mfgDate, expDate } = req.body;

        if (mfgDate.length === 0) throw new Error(ERRORS.mfgDate);
        if (expDate.length === 0) throw new Error(ERRORS.expDate);
        if (quantity.length === 0) throw new Error(ERRORS.quantity);
        if (mediNo.length === 0) throw new Error(ERRORS.mediNo);
        if (mediName.length === 0) throw new Error(ERRORS.mediName);

        next();
    } catch (error) {
        console.log(error);
        res.status(STATUS.badRequest).send({ message: error.message });
    }
};

module.exports = { validateMedicines };
