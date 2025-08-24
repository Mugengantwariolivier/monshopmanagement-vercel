
const fs = require('fs');
const path = require('path');
const dataPath = path.join(process.cwd(), 'data', 'users.json');

// users.js
module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const { username, password } = JSON.parse(body || '{}');

      // Hardcoded login
      if (username === "admin" && password === "admin123") {
        return res.status(200).json({ id: 1, username: "admin", role: "admin" });
      }

      return res.status(401).json({ error: "Invalid credentials" });
    });
    return;
  }

  res.status(405).json({ error: 'Method Not Allowed' });
};
