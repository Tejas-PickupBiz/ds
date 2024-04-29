import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Router from "./app/routes/index.routes.js";
import setup from "./swagger-setup.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/auth", Router.AuthRouter);
app.use("/api/v1/student", Router.StudentRouter);
app.use("/api/v1/generic", Router.GenericRouter);
app.use("/api/v1/faq", Router.FAQRouter);
app.use("/api/v1/inquiry", Router.InquiryRouter);
app.use("/api/v1/blog", Router.BlogRouter);

// Swagger setup
setup(app);

// Default route
app.get("/", (req, res) => {
  res.send("Hello, welcome to ICE Islamia from PickupBiz");
});

export default app;
