const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.sendfile(__dirname+'/views/home.html')
})
app.get('/about', (req, res) => {
  res.sendfile(__dirname+'/views/about.html')
})
app.get('/contact', (req, res) => {
  res.sendfile(__dirname+'/views/contact.html')
})

app.use(express.static("public"))

app.get('/home/cake', (req, res) => {
  res.send('Hello Home cake!')
})

app.get('/home/jetpur', (req, res) => {
  res.send('Hello Home jetpur!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})