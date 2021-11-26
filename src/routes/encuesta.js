const { Router } = require('express');
const router = Router();
const { validarCampos } = require('../middlewares/validar_campos');
const { check } = require('express-validator');
const { getEncuesta, getEncuestas, postEncuesta} = require('../controllers/EncuestaController');

router.get('/', getEncuestas );
router.get('/:id', getEncuesta);
router.post('/',[
    check('name', 'El campo name es obligatorio').not().isEmpty(),
    check('description', 'El campo description es obligatorio').not().isEmpty(),
    validarCampos
], postEncuesta);

module.exports = router;