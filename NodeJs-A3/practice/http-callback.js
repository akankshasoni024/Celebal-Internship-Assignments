const https = require('https');

function getData(url, callback) {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => callback(null, data));
  }).on('error', err => callback(err));
}

getData('https://jsonplaceholder.typicode.com/posts/1', (err, data) => {
  if (err) {
    console.error('Error fetching:', err);
  } else {
    console.log('Fetched (callback):', data);
  }
});
