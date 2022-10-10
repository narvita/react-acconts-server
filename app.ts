import * as express from "express";
import { User } from "./models/user.model";
import * as cors from "cors";
import mongoose from "mongoose";
const app = express();

app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);


app.get("/users", async (req, res) => {
  const allUsers = await User.find();
  return res.status(200).json(allUsers);
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById({ _id: id }).exec();
  res.status(200).json(user);
});

const start = async () => {
  let port = process.env.SERVER_PORT;
  console.log(port);

  debugger
  try {
    if (process.env.MONGO_URL) {
      mongoose.connect(`${process.env.MONGO_URL}`);
    } else {
      throw Error("Provide mongo connection string in env");
    }
    console.log(port);
    app.listen(5000, () => console.log("Server started on port 5000"));
  } catch (error) {
    process.exit(1);
  }
};

start();
module.exports = app;
