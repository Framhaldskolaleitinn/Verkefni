const express = require('express')
const app = express()

app.get('/api',(req,res) => {
    res.json({'skolar': ['takno','verzlo','flens','MS']})
    // res.json('Website/Frammhaldskolaleitinn/client/skolar.json')
})

app.listen(5000, () => (console.log('Server started on port 5000')))