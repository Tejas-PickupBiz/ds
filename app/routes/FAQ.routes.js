import express from "express";
import Controllers from "../controller/index.js";

const FAQ = express.Router();

FAQ.get("/all", Controllers.FAQController.getFAQ);
FAQ.post("/create", Controllers.FAQController.createFAQ);
FAQ.put("/update/:id", Controllers.FAQController.updateFAQ);
FAQ.delete("/delete/:id", Controllers.FAQController.deleteFAQ);
FAQ.get("/:id", Controllers.FAQController.getFAQById);

export default FAQ;
