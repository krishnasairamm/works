const mongoose = require('mongoose');

constDeptSchema = mongoose.Schema({
    name: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Dept', DeptSchema);