const { Router } = require('express');
const router = Router();

router.get('/', getOpcionRespuestas);
router.get('/:id', getOpcionRespuesta);
router.post('/id', postOpcionRespuesta);

module.exports = router;