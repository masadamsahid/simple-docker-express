const express = require('express');

const app = express();

const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
  return res.send("<h2>Hi there</h2>");
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


