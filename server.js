const express = require("express");
const path = require("path");

const users = require("./routes/users");
const auth = require("./routes/auth");
const contacts = require("./routes/contacts");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json({ extended: false }));

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/contacts", contacts);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
