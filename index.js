import app from "./app.js";
import connectDB from "./app/DB/database.js";
// connect database
connectDB();

// connect the port
const PORT = process.env.PORT;

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
