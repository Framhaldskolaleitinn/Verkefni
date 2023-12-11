
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://admin:admin123@cluster0.jvmjfif.mongodb.net/Framhaldsskolaleitin?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
});

const express = require('express')
const app = express()
const cors = require('cors');
const port = 3001;

app.use(cors());
app.use(express.json());

const myDB = client.db("Framhaldsskolaleitin");
const myColl = myDB.collection("skolar");


app.get('/api/data', async (req, res) => {
    await client.connect();

    const result = myColl.find({})
    const allValues = await result.toArray();
    res.json(allValues);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`) 