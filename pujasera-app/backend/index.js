import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import Route from "./routes/route.js";
import FileUpload from "express-fileupload";

dotenv.config();
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(Route);

app.listen(5000, () => console.log("Server Running..."));
