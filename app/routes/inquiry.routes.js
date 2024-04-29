import express from "express";
import Controllers from "../controller/index.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         finished:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 */

/**
 * Express router to handle inquiries.
 * @type {express.Router}
 */
const InquiryRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Inquiry
 *   description: Operations about inquiries
 */

/**
 * @swagger
 * /api/v1/inquiry/all:
 *   get:
 *     summary: Retrieve all inquiries
 *     tags: [Inquiry]
 *     responses:
 *       '200':
 *         description: A list of inquiries
 
 */
InquiryRouter.get("/all", Controllers.InquiryController.getInquirys);

/**
 * @swagger
 * /api/v1/inquiry/uniq/{id}:
 *   get:
 *     summary: Retrieve an inquiry by ID
 *     tags: [Inquiry]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the inquiry to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: The inquiry object
 *
 *       '404':
 *         description: Inquiry not found
 *       '500':
 *         description: Unexpected error
 */
InquiryRouter.get("/uniq/:id", Controllers.InquiryController.getInquiryById);

InquiryRouter.post("/create", Controllers.InquiryController.registerInquiry);

/**
 * @swagger
 * /api/v1/inquiry/update/{id}:
 *   put:
 *     summary: Update an existing inquiry by ID
 *     tags: [Inquiry]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the inquiry to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *
 *     responses:
 *       '200':
 *         description: The updated inquiry object
 *
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Inquiry not found
 *       '500':
 *         description: Unexpected error
 */
InquiryRouter.put("/update/:id", Controllers.InquiryController.updateInquiry);

/**
 * @swagger
 * /api/v1/inquiry/delete/{id}:
 *   delete:
 *     summary: Delete an inquiry by ID
 *     tags: [Inquiry]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the inquiry to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Success message
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Inquiry not found
 *       '500':
 *         description: Unexpected error
 */
InquiryRouter.delete(
  "/delete/:id",
  Controllers.InquiryController.deleteInquiry,
);

export default InquiryRouter;
