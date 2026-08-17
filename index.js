require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;
const code = require('./inconnu/connection');

require('events').EventEmitter.defaultMaxListeners = 500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/code', code);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log('========================================');
    console.log('        『 — ONLINE');
    console.log('        Port: ' + PORT);
    console.log('        MADE IN BY 『𝑰'𝒎 𝑬𝒎𝒎𝒂𝒏𝒖𝒆𝒍ᴸᴼᵛᴱᴿ』⁴⁴²');
    console.log('========================================');
});

module.exports = app;
