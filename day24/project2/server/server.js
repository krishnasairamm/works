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
    e_id :String,
    e_name :String,
    e_age :String,
    e_email :String,
});

const Item = mongoose.model('item',itemSchema);

//CRUD operations
app.get('/items',async(req,res)=>{
    const items = await Item.find();
    res.send(items);
});

app.post('/items',async(req,res)=>{
    const item = new Item({e_id:req.body.e_id, e_name:req.body.e_name, e_age:req.body.e_age, e_email:req.body.e_email});
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