const express = require('express');
const app = express();

const program = require("./index");


const PORT = process.env.PORT || 3000

app.get('/', program);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});