const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;

async function getStudentsName(dbName) {
  try {
    const csvData = await fs.readFile(`${dbName}.csv`, 'utf-8');
    const lines = csvData.split('\n').filter(line => line.trim() !== '');
    
    return lines.map(line => line.trim());
  } catch (error) {
    console.error('Error reading CSV file:', error);
    return [];
  }
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const dbName = req.query.db || 'default_db';
  const students = await getStudentsName(dbName);

  res.type('text/plain');
  res.send(`This is the list of our students:\n\n${students.join('\n')}\n`);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

module.exports = app;
