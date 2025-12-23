// app.js
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = 3000;

// Setup View Engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Register Partials (Kunci agar bisa dipisah-pisah)
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Setup Public Folder (untuk CSS dan Gambar)
app.use(express.static(path.join(__dirname, 'public')));

// Route Home
app.get('/', (req, res) => {
    res.render('index', {
        title: "Adhytia Tri Putra | Full-Stack Developer",
        name: "Adhytia",
        location: "Depok, Sawangan, Indonesia"
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});