const express = require('express');
const app = express();

const fs = require('fs');

const multer = require('multer');
const upload = multer({dest: 'uploads/'});

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/subirPerfil', upload.single('imagenPerfil'), (req,res) => {
    fs.rename(req.file.path, `uploads/${req.file.originalname}`, (err) => {
        if(err) {
            return res.status(500).send(`Error al guardar la imagen`, err);
        }
        res.send(`Imagen subida con exito`);
    });
});

app.listen(3000, () => console.log(`Servidor en http://localhost:3000`));