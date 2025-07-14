// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware: Logs each request
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Route 1: Home
// Route 1: Home (HTML content)
app.get('/', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>Home | Express Server</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              text-align: center; 
              margin-top: 50px; 
              background-color: #f0f8ff;
            }
            h1 { color: #007acc; }
            a {
              display: inline-block;
              margin: 10px;
              padding: 10px 20px;
              background: #007acc;
              color: white;
              text-decoration: none;
              border-radius: 5px;
            }
            a:hover {
              background-color: #005f99;
            }
          </style>
        </head>
        <body>
          <h1>Welcome to Akanksha's Express Server 🚀</h1>
          <p>This is the home page. Use the links below to navigate:</p>
          <a href="/about">Go to About Page</a>
          <a href="/contact">Go to Contact Page</a>
        </body>
      </html>
    `);
  });
  
// Route 2: About
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});
app.get('/contact', (req, res) => {
    res.send('You can contact me at: akanksha@example.com 📧');
  });
  
// 404 Handler (Middleware)
app.use((req, res) => {
  res.status(404).send('404: Page Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
