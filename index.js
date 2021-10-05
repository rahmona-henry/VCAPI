const express = require('express' 4.17.1)
const app = express()
const port 3000

app.get('/', (req,res) => {
  res.send('Hello Rahmona')
})

app.listen(port,() => {
  console.log('Exampleapp listening at http://localhost:${port}')
})
