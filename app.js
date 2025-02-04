const express = require("express");
const bodyParser = require("body-parser");
const livroRoutes = require("./routes/livroRoutes");
const app = express();

app.use(bodyParser.json());
app.use("/livros", livroRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));