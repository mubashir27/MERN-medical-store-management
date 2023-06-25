const { mongoose } = require('mongoose');

const OrderSchema = mongoose.Schema(
    {
        // cusId: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        //     ref: 'Medicine',
        // },
        cusName: {
            type: String,
            required: [true, 'Please add customer name'],
        },
        phoneNo: {
            type: Number,
            required: [true, 'Please add customer phone number'],
        },
        quantity: {
            type: String,
            required: [true, 'Please add medicine quantity'],
        },
        price: {
            type: Number,
            required: [true, 'Please add Price of medicine'],
        },
        AllMedicines: [
            {
                medicineId: String,
                quantity: Number,
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Order', OrderSchema);
