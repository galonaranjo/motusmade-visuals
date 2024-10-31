const express = require("express");
const app = express();

let visuals = [
  { id: "1", url: "/images/001.jpg" },
  { id: "2", url: "/images/002.jpg" },
  { id: "3", url: "/images/003.jpg" },
  { id: "4", url: "/images/004.jpg" },
  { id: "5", url: "/images/005.jpg" },
  { id: "6", url: "/images/006.jpg" },
  { id: "7", url: "/images/007.jpg" },
  { id: "8", url: "/images/008.jpg" },
  { id: "9", url: "/images/009.jpg" },
  { id: "10", url: "/images/010.jpg" },
  { id: "11", url: "/images/011.jpg" },
  { id: "12", url: "/images/012.jpg" },
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
