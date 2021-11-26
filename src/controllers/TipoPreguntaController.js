const { get_TipoPregunta, get_TipoPreguntas, set_TipoPregunta } = require('../models/TipoPregunta');

const getTipoPreguntas = async (req, res) => {
    const tipoPreguntas = await (get_TipoPreguntas());
    if (!tipoPreguntas){
        return res.status(400).json({ success: false, message: 'Tipo de preguntas no encontradas'});
    }
    return res.json({ success: true, tipoPreguntas});
}

const getTipoPregunta = async (req, res) => {
    const id = req.params.id;
    // const validarId = id;
    const tipoPregunta = await (get_TipoPregunta(id));
    if( !tipoPregunta ){
        return res.status(400).json({ success: false, message: 'El tipo de pregunta no existe'});
    }
    return res.json({ success: true, tipoPregunta});
}

const postTipoPregunta = async (req, res) => {
    const { name, type } = req.body;
    const tipoPregunta = await (set_TipoPregunta(name, type));
    if( !tipoPregunta ) {
        return res.status(400).json({ success: false, message: 'No se puedo agregar el tipo de pregunta'});       
    }
    return res.json({ success: true, message: 'tipo de pregunta creado!' });
}

module.exports = {
    getTipoPregunta,
    getTipoPreguntas,
    postTipoPregunta
}