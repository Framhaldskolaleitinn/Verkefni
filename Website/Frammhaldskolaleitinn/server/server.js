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