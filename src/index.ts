import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./DB/connectDB";
import router from "./routes/route";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: "*",
    methods: "GET,POST",
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());
app.use("/api/v1/movies", router);

const url = process.env.MONGODB_URI!;

connectDB(url);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
