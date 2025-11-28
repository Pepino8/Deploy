const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/hacerSuma", (req, res) => {
    const { num1, num2 } = req.body;

    const a = Number(num1);
    const b = Number(num2);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Ingresa números válidos");
    }

    const suma = a + b;
    res.send(`La suma de los dos números es: ${suma}`);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
