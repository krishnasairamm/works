const mongoose = require('mongoose')
mongoose.pluralize(null)
const UserSchema = mongoose.Schema({
    cid: Number ,
    caadhar: Number,
    cpan: String,
    cdob: Date,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('customer', UserSchema);
/* UserSchema is a object name 
Schema = tables and columns 
model() is present in mongoose package
customer = table name 
timestamps = can tells when it is created and when it is updated */