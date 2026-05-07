// import express
const express = require('express');

// cors
const cors = require('cors');

// mongoose
const mongoose = require('mongoose');
// Import router
const router = require("./routes/userRoutes");

// const live_url = "mongodb+srv://mathewonwuka_db_user:RXADFIYiYqW08wX3@techcrush.hwwrq1m.mongodb.net/UserDB?appName=techcrush"
const local_url = "mongodb://localhost:27017/userDB"

mongoose
.connect(local_url)
.then(() => console.log("MongDB Connected"))
.catch(err => console.error("Connection Error: ", err));

// create express app
const app = express();
const port = 7777;
app.use(cors());
app.use(express.json());

//All routes endpoints
app.use("/api", router);
app.get('/', (res, req) => {
    res.send("Api is running");
})

app.get('/', (req, res) => {
    res.send("api is ready for use");
})

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});