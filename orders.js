
const fs = require('fs');
const path = require('path');
const dataPath = path.join(process.cwd(), 'data', 'orders.json');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method === 'GET') {
    try {
      const list = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
      return res.status(200).json(list);
    } catch (e) {
      return res.status(500).json({ error: 'Failed to read orders' });
    }
  }
  return res.status(405).json({ error: 'Method Not Allowed (read-only demo)' });
};
