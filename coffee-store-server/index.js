const express = require('express');
const cors = require('cors');
const Coffees = require('./Coffees.json');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
app.use(cors());
app.use(express.json());


require('dotenv').config()
const port = process.env.PORT || 5000;

//coffee22Store
//UyLPAVohsnkkrcMn

app.get('/', (req, res) => {
  res.send('Hello World! Do You Know Me')
})

app.get('/coffees', (req, res) => {
    res.send(Coffees)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// MongoDB Connection : 
// --------------------

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pxdhv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    const coffeeDB = client.db("coffeeStore");
    const CoffeeCollection = coffeeDB.collection("coffees");


    // Post Operation
    app.post('/coffeeStore',async(req,res) => {
      const coffee = req.body;
      const result = await CoffeeCollection.insertOne(coffee);
      res.send(result);
    })
    // Get Operation
    app.get("/coffeeStore",async(req,res) => {
      const cursor = CoffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
    // Delete Operation
    app.delete('/coffeeStore/:id',async(req,res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await CoffeeCollection.deleteOne(query);
      res.send(result);
    })
    // update operation
    app.put('/coffeeStore/:id',async(req,res) => {
      const id = req.params.id;
      const coffee = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true}
      const updatedCoffee = {
        $set: {
          name: coffee.name,
          chef: coffee.chef,
          supplier: coffee.supplier,
          test: coffee.test,
          category: coffee.category,
          details: coffee.details,
          photo: coffee.photo
        }
      }
      const result = await CoffeeCollection.updateOne(filter,updatedCoffee,options);
      res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
