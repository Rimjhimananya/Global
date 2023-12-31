const express = require('express');
const app = express();
const port = 3000; // You can change the port if needed

// Serve static files from your project directory
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
