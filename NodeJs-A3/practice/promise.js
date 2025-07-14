const fs = require('fs').promises;

async function readFileAsync() {
  try {
    const data = await fs.readFile('test.txt', 'utf8');
    console.log('File content (async/await):', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFileAsync();
