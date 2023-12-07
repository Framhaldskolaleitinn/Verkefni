// Viktor vann í þessu frá 17:00 til 22:00 (07/12/2023)

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

    await client.close()
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})




/* async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const findResult = await myColl.find({});
    for await (const doc of findResult) {
    console.log(doc);
}
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const findResult = myoll.find({});
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end();
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

*/






/*
const express = require('express')
const app = express()
const cors = require('cors');
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/data',(req,res) => {
    const jsonData = require('/Users/accent/Documents/Skóli/VefForritun2/Verkefni/Verkefni/Website/Frammhaldskolaleitinn/server/skolar.json')
    res.json(jsonData)
    // res.json('./skolar.json')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
*/