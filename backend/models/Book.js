const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    marca: { type: String, required: true },
    product: { type: String, required: true },
    price: { type: String, required: true },
    item: { type: String, required: true },
    imagePath: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Book', BookSchema);