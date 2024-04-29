/**
 * Configuration to enable Swagger in the project.
 */
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
  info: {
    title: "Example REST API using Swagger in Node.js",
    description:
      "Demonstrates how to configure a Node.js application with expressjs, swagger-ui-express for generating the Swagger UI, and swagger-jsdoc to specify implemented endpoints with expressjs using JSDoc comments.",
  },
  servers: ["http://localhost:8080"],
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./app/routes/*.js"], // Assuming route files are located in the ./app/routes directory
};

/**
 * Configures Swagger UI for the expressjs application.
 * @param {express} app The express application
 */
const setup = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerJsDoc(swaggerOptions), { explorer: true }),
  );
};

export default setup;
