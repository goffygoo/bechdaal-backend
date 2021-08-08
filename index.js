require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/users");
const transactions = require("./routes/transactions");

const cors = require("cors");

const app = express();

app.use(cors())

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const db = process.env.MONGOURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

// Routes

app.get('/', (req, res) => {
  res.send({"" : ""})
})

app.use("/transactions", transactions);
app.use("/users", users);
// app.use("/api/company", jobs);
// app.use("/api/userjob", userjobs);

const port = process.env.PORT; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
