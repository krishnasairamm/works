const mongoose = require('mongoose')
mongoose.pluralize(null)
const UserSchema = mongoose.Schema({
    id: Number ,
    tname: String,
    age: Number,
    dob: Date,
    address: String,
    email: String,
    phone: Number,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Topper', UserSchema);
/* UserSchema is a object name 
Schema = tables and columns 
model() is present in mongoose package
Topper = table name 
timestamps = can tells when it is created and when it is updated */