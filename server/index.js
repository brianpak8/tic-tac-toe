const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../client/index.html'));
app.listen(5678, () => {
  console.log('listening on port 5678');
});
