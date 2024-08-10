
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
})
