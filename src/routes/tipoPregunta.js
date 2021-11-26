const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar_campos');
const { check } = require('express-validator');
const { getTipoPreguntas, getTipoPregunta, postTipoPregunta} = require('../controllers/TipoPreguntaController');
const router = Router();

router.get('/', getTipoPreguntas );
router.get('/:id', getTipoPregunta);
router.post('/', [
    check('name', 'El campo name es obligatorio').not().isEmpty(),
    check('type', 'El campo value es obligatorio').not().isEmpty(),
    validarCampos
],postTipoPregunta);

module.exports = router;