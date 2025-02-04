let livros = [];
let idAtual = 1;

exports.criarLivro = (req, res) => {
  const { titulo, autor, ano } = req.body;
  if (!titulo || !autor || !ano) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }
  const livro = { id: idAtual++, titulo, autor, ano };
  livros.push(livro);
  res.status(201).json(livro);
};

exports.buscarLivros = (req, res) => {
  res.json(livros);
};

exports.buscarLivroPorId = (req, res) => {
  const livro = livros.find(l => l.id == req.params.id);
  livro ? res.json(livro) : res.status(404).json({ error: "Livro não encontrado" });
};

exports.atualizarLivro = (req, res) => {
  const livro = livros.find(l => l.id == req.params.id);
  if (!livro) return res.status(404).json({ error: "Livro não encontrado" });
  const { titulo, autor, ano } = req.body;
  livro.titulo = titulo || livro.titulo;
  livro.autor = autor || livro.autor;
  livro.ano = ano || livro.ano;
  res.json(livro);
};

exports.excluirLivro = (req, res) => {
  const index = livros.findIndex(l => l.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Livro não encontrado" });
  livros.splice(index, 1);
  res.json({ message: "Livro excluído com sucesso" });
};