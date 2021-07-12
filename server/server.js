const bodyParser = require("body-parser");
const express = require("express");

const app = express();
// TODO const port = process.env.PORT || 5000;
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dummyDb = [];

app.post("/addtrack", (req, res) => {
  const { taskName, dateDue, taskStatus, taskOwner, taskJules } = req.body;

  const dateCreated = new Date();
  const work = {
    taskName,
    dateDue,
    taskStatus,
    taskOwner,
    taskJules,
    dateCreated,
  };
  dummyDb.push(work);
  res.sendStatus(200);
});

app.get("/getworklist", (req, res) => {
  const response = JSON.stringify({ list: dummyDb });
  res.status(200).end(response);
});

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening for beats on ${port}`));
