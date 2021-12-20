/**************************************************************
 * main.js
 **************************************************************/

const express = require("express")
const path = require("path")

const app = express()
const port = process.env.PORT || "3000";

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());


app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "build", "index.html"));
});


app.listen(port, () => {
    console.log(`Ocarina of Time Randomizer Tracker`);
    console.log(`Listetning on port ${port}`);
});
