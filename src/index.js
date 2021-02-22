const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "..", "public", "index.html");
    res.sendFile(filePath);
});

app.listen(8080, () => console.log("Server connected, port: 8080"));