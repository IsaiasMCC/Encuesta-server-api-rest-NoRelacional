const { get_Preguntas, set_Pregunta } = require('../models/Pregunta');



const getPreguntas = async (req, res) => {
    const id = req.params.id;
    // const validarId = id;
    const preguntas = await (get_Preguntas(id));
    if( !preguntas ){
        return res.status(400).json({ success: false, message: 'Las preguntas no existen'});
    }
    return res.json({ success: true, preguntas});
}

const postPregunta = async (req, res) => {
    const { name, id_seccion, id_tipo_pregunta } = req.body;
    const pregunta = (await (set_Pregunta(name, id_seccion, id_tipo_pregunta)));
    if( !pregunta ) {
        return res.status(400).json({ success: false, message: 'No se pudo agregar La pregunta'});       
    }
    return res.json({ success: true, message: 'Pregunta agregada correctamente' });
}

module.exports = {
    getPreguntas,
    postPregunta
}