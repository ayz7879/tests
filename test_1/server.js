import express from "express";
import ejs from "ejs";

const app = express();

app.use(express.urlencoded({ extended: true }));
const user = [];

app.get("/register", (req, res) => {
  res.render("./register.ejs");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  user.push({ name, email, password });
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.render("./login.ejs");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  for (let i = 0; i < user.length; i++) {
    if (user[i].email == email && user[i].password == password) {
      res.render("./user.ejs", { name: user[i].name });
    } else {
      res.render("./error.ejs");
    }
  }
});

app.get("/user", (req, res) => {
  res.render("./user.ejs");
});

app.post("/user", (req, res) => {
  const { name, email, password } = req.body;
  user.push({ name, email, password });
  res.redirect("/login");
});

app.get("/error", (req, res) => {
  res.render("./error.ejs");
});

app.get("/sum", (req, res) => {
  res.render("./sum.ejs");
});

app.post("/sum", (req, res) => {
  const { num1, num2 } = req.body;
  const sum = parseInt(num1) + parseInt(num2);
  res.render("./sum.ejs", { num1, num2, sum });
});

const port = 3000;
app.listen(port, () => {
  console.log(`your server is running on port ${port}`);
});
