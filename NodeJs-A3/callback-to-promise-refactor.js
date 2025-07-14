const fs = require('fs');

// Callback refactoring
function readFileCallback() {
  fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file (callback):', err);
      return;
    }
    console.log('File content (callback):', data);
  });
}

readFileCallback();

// Async/Await version using fs.promises
async function readFileAsync() {
  try {
    const data = await fs.promises.readFile('test.txt', 'utf8');
    console.log('File content (async/await):', data);
  } catch (err) {
    console.error('Error reading file (async/await):', err);
  }
}

readFileAsync();
