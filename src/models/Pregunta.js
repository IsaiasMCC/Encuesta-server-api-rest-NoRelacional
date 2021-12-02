const pool = require('../database/connection');



const get_Preguntas = async (id) => {
    try {
        return (await pool.query(`SELECT  seccion.id, seccion.name, tipo_pregunta FROM pregunta, seccion, tipo_pregunta WHERE seccion.id = pregunta.id_seccion and seccion.id = ${id} and pregunta.id = tipo_pregunta.id_pregunta`)).rows;
    } catch {
        return false;
    }
}
const set_Pregunta = async (name, id_seccion, id_tipo_pregunta)=>{
    try{
         await (pool.query(`INSERT INTO pregunta (name, description, state, id_seccion, id_tipo_pregunta) 
    VALUES ('${name}', '', false, ${id_seccion}, ${id_tipo_pregunta})`));
    return true;
    } catch{
        return false;
    }
}

module.exports = {
    get_Preguntas,
    set_Pregunta
}