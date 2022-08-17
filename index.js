const express = require('express')
const app = express()


app.get('/', function(request, response){
    response.sendFile('index.html');
});
app.get('/hello', (req, res) => {
  res.send('Hello World!')
})


port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})