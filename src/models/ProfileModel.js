const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    FirstName: { type: String },
    LastName: { type: String },
    EmailAddress: { type: String },
    MobileNumber: { type: String },
    City: { type: String },
    UserName: { type: String, unique: true },
    Password: { type: String },

}, { versionkey: false })
const profileModel = mongoose.model('profile', dataSchema)

module.exports = profileModel