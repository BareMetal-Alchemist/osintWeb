import express from 'express';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    
  res.send("hello world");
})

app.post('', (req, res) => {

})

app.get('/1',(req, res) => {
  res.send()
})

app.listen(port, () => {
  console.log(`Example app listening to ${port}`);
})
