import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const seatSchema = new Schema({
  purchased: { type: Boolean, default: false },
  section: { type: mongoose.Schema.ObjectId, ref: 'Section' },
});

module.exports = mongoose.model('Seat', seatSchema);
