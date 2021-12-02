const { Router } = require('express');
const router = Router();
const { getSeccions, postSeccion }  = require('../controllers/SeccionController');
const { validarCampos } = require('../middlewares/validar_campos');
const { check } = require('express-validator')

router.get('/:id', getSeccions);
router.post('/:id', [
    check('name', 'El campo value es obligatorio').not().isEmpty(),
    validarCampos
], postSeccion);

module.exports = router;