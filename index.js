require('dotenv').config();
const express = require('express');
const app = express();

//json
app.use(express.json());

//route
app.use(require('./src/rutaEmpleados'));

app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`);
});