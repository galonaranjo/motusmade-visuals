const express = require("express");
const app = express();

let visuals = [
  { id: "1", url: "/images/1.jpg" },
  { id: "2", url: "/images/2.jpg" },
  { id: "3", url: "/images/3.jpg" },
  { id: "4", url: "/images/4.jpg" },
  { id: "5", url: "/images/5.jpg" },
];

app.set("view engine", "ejs");
app.use(express.static("."));

app.get("/api/visuals", (request, response) => {
  response.json(visuals);
});

//On page (re)load send a new visual.
app.get("/", (request, response) => {
  const randomIndex = Math.floor(Math.random() * visuals.length);
  const randomVisual = visuals[randomIndex];
  response.render("index.ejs", { imageUrl: randomVisual.url });
});

const PORT = 3000;
app.listen(PORT);
console.log(`Server is running on port ${PORT}.`);
