const { NAME_REGEX, PHONE_REGEX } = require('../../constants/regex');
const { ERRORS } = require('../../constants/errors');
const { STATUS } = require('../../constants/statusCodes');

const validateOrder = (req, res, next) => {
    try {
        const { cusName, phoneNo, quantity, price } = req.body;

        if (NAME_REGEX.test(cusName.trim()) === false) throw new Error(ERRORS.name);
        if (PHONE_REGEX.test(phoneNo.trim()) === false) throw new Error(ERRORS.phoneNo);
        if (quantity.length === 0) throw new Error(ERRORS.quantity);
        if (price.length === 0) throw new Error(ERRORS.price);

        next();
    } catch (error) {
        console.log(error);
        res.status(STATUS.badRequest).send({ message: error.message });
    }
};

module.exports = { validateOrder };
