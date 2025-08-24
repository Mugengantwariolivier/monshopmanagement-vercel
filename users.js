
const fs = require('fs');
const path = require('path');
const dataPath = path.join(process.cwd(), 'data', 'users.json');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method === 'POST') {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => {
      try {
        const body = JSON.parse(Buffer.concat(chunks).toString() || '{}');
        const { username, password } = body;
        const users = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        const user = users.find(u => u.username === username && u.password === password);
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });
        return res.status(200).json({ id: user.id, username: user.username, role: user.role });
      } catch (e) {
        return res.status(500).json({ error: 'Login failed' });
      }
    });
    return;
  }
  return res.status(405).json({ error: 'Method Not Allowed' });
};
