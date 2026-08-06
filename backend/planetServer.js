import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import planetRoute from "./routes/planetRoute.js";

dotenv.config();
const app = express();

app.use(cors());
app.use("/api/planet", planetRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log (`Server is running on port ${PORT}`))

