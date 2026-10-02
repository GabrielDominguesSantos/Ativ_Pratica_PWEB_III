var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cadastro de Produtos — MVC' });
});

module.exports = router;
