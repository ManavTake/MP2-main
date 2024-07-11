// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
// const mongoURI = 'mongodb+srv://rajeshmalisetty0111:Rajesh2002@cluster0.3inhtun.mongodb.net/adPlacement?retryWrites=true&w=majority';

//Uncomment the below to use your local cluster
// const mongoURI = 'mongodb://localhost:27017/imageClicks';
const mongoURI = 'mongodb+srv://dhushhm:XdrAY3btEbjzvK1k@cluster0.arjb9.mongodb.net/adPlacement?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define Schema and Model for Click Data
const Schema = mongoose.Schema;
const clickSchema = new Schema({
  imageUrl: { type: String, required: true },
  clickedAt: { type: Date, default: Date.now },
});

const Click = mongoose.model('Click', clickSchema);

// Routes
app.post('/api/clicks', async (req, res) => {
  const {imageUrl} = req.body;

  if (!imageUrl) {
    return res.status(400).send('imageUrl is required');
  }

  try {
    const newClick = new Click({imageUrl});
    await newClick.save();
    res.status(200).send('Click recorded');
  } catch (error) {
    res.status(500).send('Error recording click');
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
