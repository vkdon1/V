const express = require("express");
const connectToMongo = require("./Database");
const app = express();
var cors = require("cors");
const port = 3000;

connectToMongo();
// Middleware to parse JSON
// lets resolve the cors give it permission to PUT,GET,POST,DELETE ,PATCH
var corsOptions = {
  origin: "https://z8ptm9-5173.csb.app",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// Use the router exported from auth.js
app.use("/home", require("./routes/auth"));
app.use("/users", require("./routes/users"));

// Default route
app.get("/", (req, res) => {
  res.send("Hello, welcome to the server");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
