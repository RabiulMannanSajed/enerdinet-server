import express from "express";
import cors from "cors";
import router from "./route/index.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/energinet", router);
//
const getController = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Enegirnet is running ",
  });
};

app.get("/", getController);

export default app;
