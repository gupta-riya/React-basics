const express = require('express');
const bodyParser = require('body-parser');
const pdf = require("html-pdf");
const cors = require("cors");

const app = express();

const pdfTemplate = require("./document");

const options = {
    height: "40cm",
    width: "29.5cm",
    timeout: "6000"
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//post route for pdf generation
app.post("/create-pdf", (req, res) => {
    pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
        if (err) {
            console.log(err);
            res.send(Promise.reject());
        }
        else {
            res.send(Promise.resolve());
        }
    })
})


//get route -> send generated pdf to client
app.get("/fetch-pdf", (req, res) => {
    const file = `${__dirname}/Resume.pdf`;
    res.download(file);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))
