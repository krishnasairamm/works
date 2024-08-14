// server.js
const express = require('express');
const mongoose = require('mongoose');
mongoose.pluralize(null);
const cors = require('cors');

const app = express();

app.use (cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Biography',{
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
});

const cmSchema = new mongoose.Schema({
    cmid : {type: Number ,required : true},
    cmname :{type: String,required : true},
    cmdob : {type: Date ,required : true},
    mstatus : {type: Boolean ,required : true,default: false},
    cmsalary : {type: Number ,required : true},
    email : {type : String, required : true},
    address : {type:[{city:{type:String,required : true},pincode:{type:String,required : true}}],required : true},
});

const Cmdata = mongoose.model('cminfo',cmSchema);

//CRUD operations
app.get('/cmdata',async(req,res)=>{
    const  data = await Cmdata.find(); 
    res.send(data);
});

app.post('/cmdata',async(req,res)=>{
    const data = new Cmdata({cmid:req.body.cmid , cmname : req.body.cmname,cmdob : req.body.cmdob,mstatus : req.body.mstatus,cmsalary : req.body.cmsalary,email:req.body.email,address : req.body.address});
    await data.save();
    res.send(data);
});

app.put('/cmdata/:id',async(req,res)=>{
    const data = await Cmdata.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.send(data);
});

app.get('/cmdata/:id',async(req,res)=>{
    const data = await Cmdata.findOne({_id:req.params.id});
    res.send(data);
});

app.delete('/cmdata/:id',async(req,res)=>{
    await Cmdata.findByIdAndDelete(req.params.id);
    res.send({message: 'Item deleted'});
});

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});

/* const express = require('express');
const mongoose = require('mongoose');
mongoose.pluralize(null);
const cors = require('cors');

const app = express();

app.use (cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tajmahal',{

});

const UserSchema = new mongoose.Schema({
    sname :String,
    author : String,
    dob : String,
    address : String,
});

const Tajmahal = mongoose.model('Story',UserSchema);

//CRUD


app.get('/story',async(req,res)=>{
    const stories = await Tajmahal.find();
    res.send(stories);
});

app.get('/story/:id',async(req,res)=>{
    const stories = await Tajmahal.findOne({_id:req.params.id});
    res.send(stories);
});

app.post('/story',async(req,res)=>{
    const story = new Tajmahal({sname : req.body.sname, author:req.body.author, dob : req.body.dob, address : req.body.address});
    await story.save();
    res.send(story);
});

app.put('/story/:id',async(req,res)=>{
    const story = await Tajmahal.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(story);
});

app.delete('/story/:id',async(req,res)=>{
     await Tajmahal.findByIdAndDelete(req.params.id);
    res.send({message : 'Story Deleted...!!!!!'});
});

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
}) */