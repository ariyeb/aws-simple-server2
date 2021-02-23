const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "..", "public", "index.html");
    res.sendFile(filePath);
});

const port = process.env.PORT || 3030;
app.listen(port, () => console.log("Server connected, port:", port));