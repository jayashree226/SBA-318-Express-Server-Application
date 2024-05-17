// Import required modules ================================
const express = require("express");
const bodyParser = require("body-parser");

// Create an instance of Express =====================
const app = express();
const port = 3000;
//Import users data
const users = require("./routes/users");
const post = require("./data/post");
const comments = require("./data/comments");

// Parsing (set up) Middleware ========================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Routes for users ====================================
// app.use("/users", users)
app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/post", (req, res) => {
  res.json(post);
});

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.get("/", (req, res) => {
    res.send("Work in progress!");
  });
  // 404 Middleware
  app.use((req, res) => {
    res.status(404);
    res.json({ error: "Resource Not Found" });
  });

//Start the server (Port listner) ===========================================
app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
