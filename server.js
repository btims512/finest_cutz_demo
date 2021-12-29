const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// app.use("/assets", express.static("assets"));
app.use(express.static("public"));
app.use(express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + "/public/assets"));

//HOME
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "routes/index.html"));
});

//GALLERY
app.get("/gallery", function (req, res) {
  res.sendFile(path.join(__dirname, "routes/gallery.html"));
});

//SERVICES
app.get("/services", function (req, res) {
  res.sendFile(path.join(__dirname, "routes/services.html"));
});

//CONTACT
app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "routes/contact.html"));
});

//BOOK
app.get("/book", function (req, res) {
  res.sendFile(path.join(__dirname, "routes/book.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
