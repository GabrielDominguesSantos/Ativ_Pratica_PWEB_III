# Cadastro de Produtos — MVC

Projeto da Atividade Prática Web IIII: Desenvolvimento Web com framework MVC.

Stack: Node.js, Express, EJS, Sequelize e SQLite.

## Integrante

- Nome: Gabriel Domingues dos Santos — RM: 20240336

## Como executar

```bash
npm install
npm start
```

Abra o navegador em:

- http://localhost:3000 — página inicial
- http://localhost:3000/produtos — CRUD de produtos

## Funcionalidades

- [x] Cadastro de produtos
- [x] Listagem de produtos
- [x] Edição de produtos
- [x] Exclusão de produtos
- [ ] Cadastro de categorias (Desafio 1)
- [ ] Produtos por categoria (Desafio 2)
- [ ] Pesquisa de produtos (extra)

## Desafios

_(preencher após implementar)_

- Desafio 1 — Categorias e relacionamento com produtos:
- Desafio 2 — Consulta de produtos por categoria:

## Estrutura (MVC)

```text
APIcadastro/
├── app.js
├── package.json
├── database.sqlite (gerado ao rodar)
├── bin/www
├── models/index.js        # Model Produto + conexão Sequelize
├── routes/
│   ├── index.js           # home
│   └── produtos.js        # Controller/rotas do CRUD
├── views/
│   ├── index.ejs
│   └── produtos/
│       ├── index.ejs
│       ├── novo.ejs
│       └── editar.ejs
└── public/
```

Fluxo: Usuário → Página (View/EJS) → Rota (`routes/produtos.js`) → Controller → Model (`models/index.js`) → SQLite.
"# Ativ_Pratica_PWEB_III" 
