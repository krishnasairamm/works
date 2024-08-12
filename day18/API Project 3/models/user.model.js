const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    uname: String,
    dept: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dept'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);