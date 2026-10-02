const express = require('express');
const router = express.Router();

const { Produto, Categoria } = require('../models');
const { Op } = require('sequelize');

function normalizarCategoria(body) {
  return {
    nome: body.nome,
    preco: body.preco,
    quantidade: body.quantidade,
    categoriaId: body.categoriaId === '' ? null : body.categoriaId
  };
}

router.get('/', async (req, res) => {
  const produtos = await Produto.findAll({
    include: { model: Categoria, as: 'Categoria' },
    order: [['id', 'ASC']]
  });
  const categorias = await Categoria.findAll({ order: [['nome', 'ASC']] });

  res.render('produtos/index', {
    produtos,
    categorias
  });
});

router.get('/novo', async (req, res) => {
  const categorias = await Categoria.findAll({ order: [['nome', 'ASC']] });

  res.render('produtos/novo', {
    categorias
  });
});

router.post('/', async (req, res) => {
  await Produto.create(normalizarCategoria(req.body));

  res.redirect('/produtos');
});

router.get('/categoria/:id', async (req, res) => {
  const categoria = await Categoria.findByPk(req.params.id);

  if (!categoria) {
    return res.redirect('/produtos');
  }

  const produtos = await Produto.findAll({
    where: { categoriaId: req.params.id },
    include: { model: Categoria, as: 'Categoria' },
    order: [['id', 'ASC']]
  });
  const categorias = await Categoria.findAll({ order: [['nome', 'ASC']] });

  res.render('produtos/por-categoria', {
    produtos,
    categoria,
    categorias
  });
});

router.get('/buscar', async (req, res) => {
  const termo = (req.query.nome || '').trim();

  const produtos = termo ? await Produto.findAll({
    where: { nome: { [Op.like]: `%${termo}%` } },
    include: { model: Categoria, as: 'Categoria' },
    order: [['id', 'ASC']]
  }) : [];

  res.render('produtos/buscar', {
    produtos,
    termo
  });
});

router.get('/:id/editar', async (req, res) => {
  const produto = await Produto.findByPk(req.params.id, {
    include: { model: Categoria, as: 'Categoria' }
  });
  const categorias = await Categoria.findAll({ order: [['nome', 'ASC']] });

  res.render('produtos/editar', {
    produto,
    categorias
  });
});

router.post('/:id', async (req, res) => {
  await Produto.update(normalizarCategoria(req.body), {
    where: {
      id: req.params.id
    }
  });

  res.redirect('/produtos');
});

router.post('/:id/deletar', async (req, res) => {
  await Produto.destroy({
    where: {
      id: req.params.id
    }
  });

  res.redirect('/produtos');
});

module.exports = router;
