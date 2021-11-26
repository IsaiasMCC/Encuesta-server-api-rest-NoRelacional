const pool = require('../database/connection');


const get_OpcionRespuesta = async (id)  => {
    try{
        return await( pool.query(`SELECT * FROM opcion_respuesta WHERE opcion_respuesta.id = '${id}'`)).rows[0];
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
    get_OpcionRespuesta,
    set_OpcionRespuesta
}