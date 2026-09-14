import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import planetRoute from "./routes/planetRoute.js";

dotenv.config();
const app = express();

// const cors = require("cors");

app.use(cors());
app.use("/api/planet", planetRoute);
// process.env.PORT || removing to see if it resolves connection error since changing laptop
 const PORT =  3000;


app.listen(PORT, () => console.log (`Server is running on port ${PORT}`))

