const pool = require('../database/connection');


const get_Encuesta = async (id)  => {
    try{
        const resul =  (await pool.query(`SELECT pregunta.name FROM encuesta, seccion, pregunta WHERE encuesta.id = ${id} and encuesta.id = seccion.id_encuesta and seccion.id = pregunta.id_seccion`)).rows;
        if (resul.length > 0)
        return resul
        else return false
    }catch{
        return false;
    }
}

const get_Encuestas = async () => {
    try {
        const resul = (await pool.query(`SELECT * FROM encuesta`)).rows;
        if (resul.length > 0)
        return resul;
        else
        return false;
    } catch {
        return false;
    }
}
const set_Encuesta = async (name, description)=>{
    try{
        const data = new Date();
         await (pool.query(`INSERT INTO encuesta (name, description, fecha_creacion, fecha_modificacion, state) 
    VALUES ('${name}', '${description}', '${data.getDay()}/${data.getMonth()}/${data.getFullYear()+1}', null, false)`));
    return true;
    } catch{
        return false;
    }
}

const stateEncuesta = async (id)=> {
    try {
        return  (await pool.query(`SELECT encuesta.state FROM encuesta WHERE encuesta.id = ${id}`)).rows[0];
        
    } catch {
        return false;
    }
}

module.exports = {
    get_Encuesta,
    get_Encuestas,
    set_Encuesta,
    stateEncuesta
}