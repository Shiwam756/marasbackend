import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./database/db.js";
import router from "./routes/user.route.js";

const server = express();

db;

server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// CORS configuration
const corsOptions = {
  origin: "https://marasimpex.com",
  methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
  credentials: true,
};

server.use(cors(corsOptions));

server.use("/api", router);

const port = process.env.PORT || 5005;

server.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
