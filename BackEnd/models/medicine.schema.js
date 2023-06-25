const { mongoose } = require('mongoose');

const MedicineSchema = mongoose.Schema(
    {
        mediNo: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Order',
        },
        quantity: {
            type: Number,
            required: [true, 'please add quantity'],
        },
        mfgDate: {
            type: String,
            required: [true, 'Please add Medicine MFG'],
        },
        expDate: {
            type: String,
            required: [true, 'Please add medicine EXP'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Medicine', MedicineSchema);
