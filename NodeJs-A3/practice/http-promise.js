const https = require('https');

function getData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', err => reject(err));
  });
}

async function fetchData() {
  try {
    const result = await getData('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Fetched (async/await):', result);
  } catch (err) {
    console.error('Error:', err);
  }
}

fetchData();
