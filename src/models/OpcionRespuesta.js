const pool = require('../database/connection');


const get_OpcionRespuestas = async (id)  => {
    try{
        const result =  (await pool.query(`SELECT opcion_respuesta.value FROM pregunta, opcion_respuesta WHERE pregunta.id = ${id} and pregunta.id = opcion_respuesta.id_pregunta`)).rows;
        if (result > 0)
        return result;
        else return false;
    }catch{
        return false;
    }
}


const set_OpcionRespuesta = async (value, id_pregunta)=>{
    try{
        return await (pool.query(`INSERT INTO opcion_respuesta (value, id_pregunta) 
    VALUES ('${value}', ${id_pregunta} )`));
    } catch{
        return false;
    }
}

module.exports = {
    get_OpcionRespuestas,
    set_OpcionRespuesta
}