const { get_Encuesta, get_Encuestas, set_Encuesta, stateEncuesta } = require('../models/Encuesta');

const getEncuestas = async (req, res) => {
    const encuestas = await (get_Encuestas());
    
    if (!encuestas){
        return res.status(400).json({ success: false, message: 'Las encuestas no fueron encontradas'});
    }
    return res.json({ success: true, encuestas});
}

const getEncuesta = async (req, res) => {
    const id = req.params.id;
    // const validarId = id;
    const encuesta = await (get_Encuesta(id));
    let state = await (stateEncuesta(id));
    state = state['state'];
    if( !encuesta  ||  !state ){
        return res.status(400).json({ success: false, message: 'La encuesta no existe'});
    }
    return res.json({ success: true, encuesta});
}

const postEncuesta = async (req, res) => {
    const { name, description } = req.body;
    const encuesta = await (set_Encuesta(name, description));
    if( !encuesta ) {
        return res.status(400).json({ success: false, message: 'No se puedo agregar la encuesta'});       
    }
    return res.json({ success: true, message: 'Encuesta agregada correctamente!' });
}

module.exports = {
    getEncuesta,
    getEncuestas,
    postEncuesta
}