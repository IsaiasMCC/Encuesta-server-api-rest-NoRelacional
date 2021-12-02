const { get_Seccions, set_Seccion } = require('../models/Seccion');


const getSeccions = async (req, res) => {
    const id = req.params.id;
    // const validarId = id;
    const seccions = await (get_Seccions(id));
    
    if( !seccions ){
        return res.status(400).json({ success: false, message: 'No existen secciones'});
    }
    return res.json({ success: true, seccions});
}

const postSeccion = async (req, res) => {
    const id_encuesta = req.params.id;
    const { name } = req.body;
    const seccion = (await (set_Seccion(name, id_encuesta)));
    if( !seccion ) {
        return res.status(400).json({ success: false, message: 'No se pudo agregar La seccion'});       
    }
    return res.json({ success: true, message: 'Seccion agregada correctamente' });
}

module.exports = {
    getSeccions,
    postSeccion
}