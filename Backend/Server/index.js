const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

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