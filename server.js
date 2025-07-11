// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRouter from "./routes/userRoute.js";
// import cors from "cors"
// dotenv.config();
// const app = express();
// app.use(cors())
// app.use(express.json());
// const dbuser = encodeURIComponent(process.env.DBUSER);
// const dbpass = encodeURIComponent(process.env.DBPASS);

// // mongoose.connect(`mongodb://localhost:27017/cafe`).then(() => {
// //   app.listen(8080, () => {
// //     console.log("Server started");
// //   });
// // });

// mongoose
//   .connect(
//     `mongodb+srv://${dbuser}:${dbpass}@cluster0.qjxhv.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`
//   )
//   .then(() => {
//     app.listen(8080, () => {
//       console.log("Server started");
//     });
//   });

// app.use("/api/users", userRouter);


import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

mongoose
  .connect(
    `mongodb+srv://${dbuser}:${dbpass}@cluster0.ivvaoj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/users", userRouter);

// ✅ Export the Express app for Vercel
export default app;
