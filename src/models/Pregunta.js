const pool = require('../database/connection');
const { get_TipoPregunta } = require('../models/TipoPregunta');
const { get_OpcionRespuestas } = require('../models/OpcionRespuesta');

const get_Preguntas = async (id) => {
    try {
        return (await pool.query(`SELECT  pregunta.id, pregunta.name, id_tipo_pregunta FROM pregunta, seccion WHERE seccion.id = pregunta.id_seccion and seccion.id = ${id} `)).rows;
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

const Preguntas = async (id) => {
    const questions = await( get_Preguntas(id));
    for (let index = 0; index < questions.length; index++) {
        const Opcionrespuestas = await (get_OpcionRespuestas(questions[index].id));
        const tipoPregunta =  await (get_TipoPregunta(questions[index].id_tipo_pregunta));
        questions[index].optionRespuestas = Opcionrespuestas;
        questions[index].tipoPregunta = tipoPregunta;
    }
    return questions;
}

module.exports = {
    get_Preguntas,
    set_Pregunta,
    Preguntas
}