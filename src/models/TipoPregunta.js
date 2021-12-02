const pool = require('../database/connection');


const get_TipoPregunta = async (id)  => {
    try{
        return  (await pool.query(`SELECT * FROM tipo_pregunta WHERE tipo_pregunta.id = ${id}`)).rows[0];
     
    }catch{
        return false;
    }
}

const get_TipoPreguntas = async () => {
    try {
        const result = (await pool.query(`SELECT * FROM tipo_pregunta`)).rows;
        if (result.length > 0 )
        return result;
        else return false;
    } catch {
        return false;
    }
}
const set_TipoPregunta = async (name, type)=>{
    try{
         await (pool.query(`INSERT INTO tipo_pregunta (name, type) 
    VALUES ('${name}', ${type})`));
    return true
    } catch{
        return false;
    }
}

module.exports = {
    get_TipoPregunta,
    get_TipoPreguntas,
    set_TipoPregunta
}