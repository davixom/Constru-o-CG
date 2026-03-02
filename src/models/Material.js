const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
    price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

materialSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;