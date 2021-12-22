const express = require("express");
const app = express();
const port = 3001;
const pets = [
  { name: "dog", id: 1 },
  { name: "dog", id: 2 },
];
const workouts = [];

app.get("/pets", (req, res) => {
  res.send(JSON.stringify(pets));
});

app.get("/pets/:id", function (req, res) {
  let pet = null;
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].id == req.params.id) {
      pet = pets[i];
    }
  }
  res.send(JSON.stringify(pet));
});

app.get("/workouts", (req, res) => {
  res.send(JSON.stringify(workouts));
});

//create a new workout

app.post("/workouts", (req, res) => {
  res.send(`Workout created!`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
