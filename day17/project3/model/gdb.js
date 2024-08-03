//Database Schema 

const mongoose = require('mongoose');

const Schema = mongoose.Schema

const passportLocalMongoose = require('passport-local-mongoose');
var groominfo = new Schema({
    username : {
        type : String
    },
    password : {
        type: String
    },
    dob : {
        type: Date
    },
    email : {
        type: String
    },
    age : {
        type: Number
    }
})

groominfo.plugin(passportLocalMongoose) //to use plugin "passport-local-mongoose"

module.exports = mongoose.model('groomtable',groominfo)