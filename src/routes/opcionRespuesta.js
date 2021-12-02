const { Router } = require('express');
const router = Router();
const { getOpcionRespuesta, postOpcionRespuesta }  = require('../controllers/OpcionRespuestaController');
const { validarCampos } = require('../middlewares/validar_campos');
const { check } = require('express-validator');

router.get('/:id', getOpcionRespuesta);
router.post('/:id', [
    check('value', 'El campo value es obligatorio').not().isEmpty(),
    validarCampos
], postOpcionRespuesta);

module.exports = router;