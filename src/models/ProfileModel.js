const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    FirstName: { type: String },
    LastName: { type: String },
    EmailAddress: { type: String, required: true },
    MobileNumber: { type: String, unique: true },
    City: { type: String },
    UserName: { type: String, unique: true },
    Password: { type: String },

}, { versionkey: false })
const profileModel = mongoose.model('profile', dataSchema)

module.exports = profileModel