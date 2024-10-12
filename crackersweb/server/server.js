const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());


const dbURI = 'mongodb://localhost:27017/crack'; 

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const cartSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  address: String,
  email: String,
  state: String,
  totalAmount: Number
});

const Cart = mongoose.model('Cart', cartSchema);

app.post('/api/cart', (req, res) => {
  const cartData = new Cart(req.body);
  cartData.save()
    .then(() => res.status(201).json({ message: 'Order submitted successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
