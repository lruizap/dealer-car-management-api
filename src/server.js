// src/server.js

const app = require("./app");

// Define the port
const port = process.env.PORT || 8080;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
