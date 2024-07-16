const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3100;

app.use(cors());

let blogData = [];

const loadBlogData = () => {
  try {
    const data = fs.readFileSync(
      path.join(__dirname, "generatedBlogData.json"),
      "utf8"
    );
    blogData = JSON.parse(data);
  } catch (err) {
    console.error("Error reading blog data file:", err);
  }
};

loadBlogData();

app.get("/api/posts", (req, res) => {
  res.json(blogData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
