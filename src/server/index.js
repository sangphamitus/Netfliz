const {
    db
} = require("./config/firebase");
const express = require("express");
const cors = require("cors");

const PORT = 3000 || process.env.PORT;
const app = express();



app.use(cors());

app.get("/", (req, res) => res.status(200).send("Hello client"));
app.listen(PORT, 'localhost', async () => {
    const docRef = db.collection('users').doc("caideojdo");

    docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
    });
    console.log("done")
});