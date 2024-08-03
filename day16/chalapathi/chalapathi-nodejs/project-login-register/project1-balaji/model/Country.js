//Database Schema

const mongoose = require('mongoose');

const Schema = mongoose.Schema

const passportLocalMongoose = require('passport-local-mongoose');
var User = new Schema({
    cid:{
        type:String
    },
    cname : {
        type : String
    },
   
    caddress : {
        type: String
    },
    password : {
        type: String
    }

})

User.plugin(passportLocalMongoose) //to use plugin "passport-local-mongoose"

module.exports = mongoose.model('Country',User)