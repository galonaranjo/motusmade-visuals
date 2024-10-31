const express = require("express");
const app = express();

let visuals = [
  { id: "1", url: "#" },
  { id: "2", url: "#" },
  { id: "3", url: "#" },
];

app.get("/api/visuals", (request, response) => {
  response.json(visuals);
});

app.get("/", (request, response) => {
  const randomIndex = Math.floor(Math.random() * visuals.length);
  const randomVisual = visuals[randomIndex];
  response.send(`<img src=${randomVisual.url}>`);
});

const PORT = 3000;
app.listen(PORT);
console.log(`Server is running on port ${PORT}.`);
