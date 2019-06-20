const express = require("express");

const users = require("./routes/users");
const auth = require("./routes/auth");
const contacts = require("./routes/contacts");
const connectDB = require("./config/db");

const app = express();
connectDB();

const PORT = process.env.PORT || 5000;

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/contacts", contacts);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
