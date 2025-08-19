import { app } from "./app.js";

try {
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
} catch (error) {
  console.log("Error starting the server:", error);
}
