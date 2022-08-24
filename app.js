const express = require("express");
const bodyParser = require("body-parser");

const { Link } = require("./models/link");

const app = express();
require("./db/connection");
app.use(bodyParser.json());

app.get("/:namespace", async function (req, res) {
    try {
        if (req.query.link) {
            console.log("add");
            const newLink = {
                namespace: req.params.namespace,
                linkedTo: req.query.link
            };
            const link = new Link(newLink);
            await link.save();
            return res.send("Done");
        } else {
            console.log("show");            
            const data = await Link.findOne({namespace: req.params.namespace});
            console.log(data);
            if (data) {
                res.redirect(data.linkedTo);
            } else {
                return res.send("NA");
            }            
        }
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            success: false
        });
    }
});

app.all("*", (req, res) => {
    res.send("NA");
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`Server started at port ${port}.`);
});
