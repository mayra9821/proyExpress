const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log("solicitud recibida desde nodejs")
    res.send('Solicitud recibida para endpoint GET con mayra');

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

