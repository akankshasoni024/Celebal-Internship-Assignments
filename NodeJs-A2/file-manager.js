// file-manager.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const BASE_DIR = path.join(__dirname, 'files');

if (!fs.existsSync(BASE_DIR)) fs.mkdirSync(BASE_DIR);

function handleCreate(query, res) {
    const filename = path.basename(query.filename || '');
    const content = query.content || '';

    if (!filename) return sendResponse(res, 400, 'Filename is required.');

    const filePath = path.join(BASE_DIR, filename);
    fs.writeFile(filePath, content, err => {
        if (err) return sendResponse(res, 500, `Error creating file: ${err.message}`);
        sendResponse(res, 200, `File '${filename}' created.`);
    });
}
//TEST handleCreate by http://localhost:3000/create?filename=test.txt&content=Hello


function handleRead(query, res) {
    const filename = path.basename(query.filename || '');

    if (!filename) return sendResponse(res, 400, 'Filename is required.');

    const filePath = path.join(BASE_DIR, filename);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return sendResponse(res, 404, `File '${filename}' not found.`);
        sendResponse(res, 200, data, 'text/plain');
    });
}
//TEST handleRead by http://localhost:3000/read?filename=test.txt

function handleDelete(query, res) {
    const filename = path.basename(query.filename || '');

    if (!filename) return sendResponse(res, 400, 'Filename is required.');

    const filePath = path.join(BASE_DIR, filename);
    fs.unlink(filePath, err => {
        if (err) return sendResponse(res, 404, `File '${filename}' not found.`);
        sendResponse(res, 200, `File '${filename}' deleted.`);
    });
}
//TEST handleDelete by http://localhost:3000/delete?filename=test.txt

function sendResponse(res, statusCode, message, contentType = 'text/plain') {
    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.end(message);
}

// Main server
const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    switch (pathname) {
        case '/create':
            handleCreate(query, res);
            break;
        case '/read':
            handleRead(query, res);
            break;
        case '/delete':
            handleDelete(query, res);
            break;
        default:
            sendResponse(res, 404, 'Invalid route. Use /create, /read, or /delete.');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
