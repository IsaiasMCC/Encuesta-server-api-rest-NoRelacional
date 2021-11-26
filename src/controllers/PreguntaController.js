const { get_Pregunta, get_Preguntas, set_Pregunta } = require('../models/Pregunta');

const getPreguntas = async (req, res) => {
    const preguntas = await (get_Preguntas());
    if (!preguntas){
        return res.status(400).json({ success: false, message: 'Preguntas no encontradas'});
    }
    return res.json({ success: true, preguntas});
}

const getPregunta = async (req, res) => {
    const id = req.params.id;
    // const validarId = id;
    const pregunta = await (get_Pregunta(id));
    if( !pregunta ){
        return res.status(400).json({ success: false, message: 'La pregunta no existe'});
    }
    return res.json({ success: true, pregunta});
}

const postPregunta = async (req, res) => {
    const { name, id_encuesta, id_tipo_pregunta } = req.body;
    const pregunta = (await (set_Pregunta(name, id_encuesta, id_tipo_pregunta)));
    if( !pregunta ) {
        return res.status(400).json({ success: false, message: 'No se pudo agregar La pregunta'});       
    }
    return res.json({ success: true, message: 'Pregunta agregada correctamente' });
}

module.exports = {
    getPreguntas,
    getPregunta,
    postPregunta
}