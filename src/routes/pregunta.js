const { Router } = require('express');
const router = Router();
const { validarCampos } = require('../middlewares/validar_campos');
const { check } = require('express-validator');
const { getPreguntas,getPregunta, postPregunta } = require('../controllers/PreguntaController');


router.get('/:id', getPreguntas);
router.post('/',[
    check('name', 'El campo name es obligatorio').not().isEmpty(),
    check('id_seccion', 'El campo id_seccion es obligatorio').not().isEmpty(),
    check('id_tipo_pregunta', 'El campo id_tipo_pregunta es obligatorio').not().isEmpty(),
    validarCampos
], postPregunta);

module.exports = router;