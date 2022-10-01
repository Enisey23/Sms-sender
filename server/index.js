import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { registerValidation, loginValidation, postCreateValidation} from "./validations.js";
import { handleValidationErrors, checkAuth } from "./utils/index.js";
import { UserController, PostController } from "./controllers/index.js";

mongoose
  .connect(
    // mongodb
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.post( "/auth/login", loginValidation, handleValidationErrors, UserController.login);
app.post("/auth/register", registerValidation, handleValidationErrors, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

app.get("/posts", checkAuth, handleValidationErrors, PostController.getAll);
app.post("/posts", checkAuth, postCreateValidation, handleValidationErrors, PostController.create);
app.patch("/posts/:id", checkAuth, postCreateValidation, handleValidationErrors);

app.listen(process.env.PORT || 4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
