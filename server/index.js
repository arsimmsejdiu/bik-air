import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./routes/UserRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/user", userRoutes);

const CONNECTION_URL =
  "mongodb+srv://arsimsejdiu:arsimsejdiu@cluster0.oys3c.mongodb.net/bikair?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
