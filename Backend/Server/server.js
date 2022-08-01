const express = require("express");
const router = express.Router();
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.post('/', (req, res) => {
    res.send('Got a POST request')
  });
  
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  });


module.exports = router;