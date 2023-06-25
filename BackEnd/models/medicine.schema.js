const { mongoose } = require('mongoose');

const MedicineSchema = mongoose.Schema(
    {
        // medicine_id: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        //     ref: 'Order',
        // },
        mediName: {
            type: String,
            required: [true, 'please add Medi name'],
        },
        mediNo: {
            type: Number,
            required: [true, 'please add Medi no'],
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
