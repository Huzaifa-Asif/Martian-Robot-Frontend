const express = require('express');

const app = express();

app.use(express.static('./dist/Frontend-Martian-Robots'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/Frontend-Martian-Robots'}),
);

app.listen(process.env.PORT || 8080);