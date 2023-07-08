const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const  bodyParser = require('body-parser')
require('dotenv').config()
const app = express();

app.use(cors());
app.use(bodyParser.json())
// Connect to MongoDB
mongoose
  .connect(process.env.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define a schema for the table data
const tableSchema = new mongoose.Schema({
  slipNo: Number,
  vehType: String,
  item: String,
  charge: Number,
  vehNo: String,
  consignor:String,
  weight: Number,
  wm:String
  
},{timestamps:true});

// Define a model based on the schema
const TableData = mongoose.model('TableData', tableSchema);

// API endpoint to fetch the table data

app.get('/',(req,res)=>{
    res.send('<h1>server running</h1>')
})

app.post('/api/tabledata',async (req,res)=>{

    const data = req.body;

    try{
        console.log('data',data);
        const row = new TableData(data)

        row.save().then(r=>console.log(r)).catch(err=>console.log(err))
        res.json({status:'working and added succesfully'})


    }catch(err){
        console.log(err);
        res.send('error')
    }
})


app.get('/api/tabledata', async (req, res) => {
  try {
    const data = await TableData.find({});
    res.json(data);
  } catch (error) {
    console.error('Error fetching table data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
