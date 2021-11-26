const { get_OpcionRespuesta, set_OpcionRespuesta } = require('../models/OpcionRespuesta');


const getOpcionRespuesta = (req, res) => {
    const id = req.params.id;
    // const validarId = id;
    const opcionRespuesta = await (get_OpcionRespuesta(id));
    if( !opcionRespuesta ){
        return res.status(400).json({ success: false, message: 'Las opciones de respuesta no existen '});
    }
    return res.json({ success: true, pregunta});
}

const postOpcionRespuesta = (req, res) => {
    const id_pregunta = req.params.id;
    //const validarId = id;
    const { value } = req.body;
    const opcionRespuesta = await (set_OpcionRespuesta(value, id_pregunta));
    if( !opcionRespuesta ) {
        return res.status(400).json({ success: false, message: 'No se pudo agregar La opcion de respuesta'});       
    }
    return res.json({ success: true, opcionRespuesta });
}

module.exports = {
    getOpcionRespuesta,
    postOpcionRespuesta
}