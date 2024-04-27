const express = require('express');
const app = express();
const port = 5000;

// c.Header("Access-Control-Allow-Origin", "http://localhost:5000/item2/")

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});
app.get('/item2', (req, res) => {
  res.send({a: 'Hello from Express 2!',
  b: 'Hello from Express b!'});
});
app.get('/dataLegend1', (req, res) => {
  res.send({overall: '12345456', title: "item #1", item1: "1",
item2: "2", item3: "3", item4: "4", item5: "5"})
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});