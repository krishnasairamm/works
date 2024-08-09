// server.js
const express = require('express');
const mongoose = require('mongoose');
mongoose.pluralize(null);
const cors = require('cors');

const app = express();

app.use (cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/merncrud',{
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
});

const itemSchema = new mongoose.Schema({
    name :String,
});

const Item = mongoose.model('Item',itemSchema);

//CRUD operations
app.get('/items',async(req,res)=>{
    const items = await Item.find();
    res.send(items);
});

app.post('/items',async(req,res)=>{
    const item = new Item({name:req.body.name});
    await item.save();
    res.send(item);
});

app.put('/items/:id',async(req,res)=>{
    const item = await Item.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.send(item);
});

app.get('/items/:id',async(req,res)=>{
    const items = await Item.findOne({_id:req.params.id});
    res.send(items);
});

app.delete('/items/:id',async(req,res)=>{
    await Item.findByIdAndDelete(req.params.id);
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