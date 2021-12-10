import express from "express";
const app = express();
import dotenv from "dotenv";
import { usersRoutes } from "./routes/usersRotues";

dotenv.config();

app.use(express.json());
app.use(usersRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running...");
});
