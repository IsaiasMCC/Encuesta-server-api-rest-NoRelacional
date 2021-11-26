const pool = require('../database/connection');


const get_Encuesta = async (id)  => {
    try{
        return (await pool.query(`SELECT * FROM encuesta, pregunta WHERE encuesta.id = ${id} and encuesta.id = pregunta.id_encuesta`)).rows;
    }catch{
        return false;
    }
}

const get_Encuestas = async () => {
    try {
        return (await pool.query(`SELECT * FROM encuesta`)).rows;
    } catch {
        return false;
    }
}
const set_Encuesta = async (name, description)=>{
    try{
         await (pool.query(`INSERT INTO encuesta (name, description, state) 
    VALUES ('${name}', '${description}', false)`));
    return true;
    } catch{
        return false;
    }
}

module.exports = {
    get_Encuesta,
    get_Encuestas,
    set_Encuesta
}