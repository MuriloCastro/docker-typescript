import express from "express";
import { setupRoutes } from "./routes/routers";

const app = express();
setupRoutes(app);
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
