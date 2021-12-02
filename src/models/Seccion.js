const pool = require('../database/connection');


const get_Seccions = async (id)  => {
    try{
        const resp = (await pool.query(`SELECT seccion.id, seccion.name FROM encuesta, seccion WHERE encuesta.id = seccion.id_encuesta and seccion.id_encuesta = ${id}`)).rows;
        if (resp.length > 0)
        return resp;
         else
        return false;
    }catch{
        return false;
    }
}


const set_Seccion = async (name, id_encuesta)=>{
    try{
         await (pool.query(`INSERT INTO seccion (name, state, id_encuesta) 
    VALUES ('${name}', false, ${id_encuesta})`));
    return true
    } catch{
        return false;
    }
}

module.exports = {
    get_Seccions,
    set_Seccion
}