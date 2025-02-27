import express from "express";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/guildhouse", (req, res) => {
  res.render("guildhouse.ejs");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
