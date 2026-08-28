/**
 * SRINIVAS ECOMMERCE - NODE.JS EXPRESS HTTP SERVER ENTRYPOINT
 */
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'HEALTHY', app: 'Srinivas Ecommerce', timestamp: new Date() });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Srinivas Ecommerce Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
