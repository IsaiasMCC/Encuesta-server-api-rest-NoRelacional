const { get_OpcionRespuestas, set_OpcionRespuesta } = require('../models/OpcionRespuesta');


const getOpcionRespuesta = async (req, res) => {
    const id = req.params.id;
    // const validarId = id;
    const opcionRespuestas = await (get_OpcionRespuestas(id));
    
    if( !opcionRespuestas ){
        return res.status(400).json({ success: false, message: 'Las opciones de respuesta no existen '});
    }
    return res.json({ success: true, opcionRespuestas});
}

const postOpcionRespuesta = async (req, res) => {
    const id_pregunta = req.params.id;
    //const validarId = id;
    const { value } = req.body;
    const opcionRespuesta = await (set_OpcionRespuesta(value, id_pregunta));
    if( !opcionRespuesta ) {
        return res.status(400).json({ success: false, message: 'No se pudo agregar La opcion de respuesta'});       
    }
    return res.json({ success: true, message: 'opcion respuesta agregada' });
}

module.exports = {
    getOpcionRespuesta,
    postOpcionRespuesta
}