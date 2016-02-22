const express = require('express');

const app = new express();
const port = 6900;

//set up routes for loading static files
app.use('/js/', express.static(`${__dirname}/static/js`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/static/index.html`);
});

app.listen(port, () => {
  console.log(`Eavesdropping on port ${port}`);
});
