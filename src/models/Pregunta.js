const pool = require('../database/connection');


const get_Pregunta = async (id)  => {
    try{
        return await( pool.query(`SELECT * FROM pregunta WHERE pregunta.id = ${id}`)).rows[0];
    }catch{
        return false;
    }
}

const get_Preguntas = async () => {
    try {
        return (await pool.query(`SELECT * FROM pregunta`)).rows;
    } catch {
        return false;
    }
}
const set_Pregunta = async (name, id_encuesta, id_tipo_pregunta)=>{
    try{
         await (pool.query(`INSERT INTO pregunta (name, description, state, id_encuesta, id_tipo_pregunta) 
    VALUES ('${name}', '', false, ${id_encuesta}, ${id_tipo_pregunta})`));
    return true;
    } catch{
        return false;
    }
}

module.exports = {
    get_Pregunta,
    get_Preguntas,
    set_Pregunta
}