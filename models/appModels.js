import mongoose from 'mongoose';

const AppointmentsSchema = new mongoose.Schema({
    ID: Number,
    NAME:String,
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Appointments', AppointmentsSchema);