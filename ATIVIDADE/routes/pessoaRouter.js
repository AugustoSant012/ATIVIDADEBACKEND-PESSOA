const express = require('express');
const router = express.Router();

const PessoaController = require('../controllers/PessoaController');

router.post('/pessoas', PessoaController.criar);
router.get('/pessoas', PessoaController.listar);
router.get('/pessoas/:id', PessoaController.buscarPorId);
router.put('/pessoas/:id', PessoaController.atualizar);
router.delete('/pessoas/:id', PessoaController.deletar);

module.exports = router;
