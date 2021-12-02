const pool = require('../database/connection');
const { get_Seccions } = require('../models/Seccion'); 
const { Preguntas } = require('../models/Pregunta');
const get_Encuesta = async (id)  => {
    try{
        const resul =  (await pool.query(`SELECT id, name, description,state FROM encuesta where id = ${id}`)).rows[0];
        if( resul === undefined)
        return false;
        else return resul;
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

const Encuesta = async (id) => {
    const encuesta = await( get_Encuesta(id));
    const sections = await( get_Seccions(id));
    encuesta.sections = sections;
    for (let index = 0; index < encuesta.sections.length; index++) {
      
        const questions = await( Preguntas(sections[index].id));
        encuesta.sections[index].questions = questions;
    }
    return encuesta;
}

module.exports = {
    get_Encuesta,
    get_Encuestas,
    set_Encuesta,
    stateEncuesta,
    Encuesta
}