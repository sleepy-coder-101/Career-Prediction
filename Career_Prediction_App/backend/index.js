require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", require("./routes/index"));

// mongoose.set("strictQuery", false);
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(port, () => console.log(`Server Port: ${port}`));

//     /* ADD DATA ONE TIME */
//     // User.insertMany(users);
//     // Post.insertMany(posts);
//   })
//   .catch((error) => console.log(`${error} did not connect`));

app.listen(port, () => {
  console.log(`Server is running on Port : ${port}`);
});
