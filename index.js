const express = require('express');
const app = express();

// Herokus opportunity to pass us runtime configuration. 
// Configured after deployment
const PORT = process.env.PORT || 5000;

// '/' instructs express to allow user to visit root route.
// callback is called after request is sent to '/'.
app.get('/', (req, res) => {
  res.send({ new: 'content' });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});