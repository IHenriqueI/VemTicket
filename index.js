const express = require("express");
const session = require("express-session");
const app = express();

// Configurar sessões (opcional)
app.use(session({
    secret: "minha-chave-secreta",
    resave: false,
    saveUninitialized: false
}));

// Para permitir ler POST (formularios)
app.use(express.urlencoded({ extended: true }));

// Servir páginas da pasta "public"
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
