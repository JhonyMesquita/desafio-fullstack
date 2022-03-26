import express from 'express';
const app = express();
app.use(express.json());

/* // #IMPORT - sqlite trabalha via module 
import { openDb } from './configDB.js';
import { createTable, insertCurso, updateCurso, selectCursos, selectId, deleteCurso } from './controler/disciplinas.js'; */

// Routes import
import router from './routes.js';
app.use(router);

app.listen(3000, function(){
    console.log('Api rodando')
});

/* criar database sqlite. DONE!
openDb(); */
/* criar tabela. DONE!
createTable(); */



/* 
// VERBOS

// #GET - Todo o banco
app.get('/cursos', async function(req, res){
    let cursos = await selectCursos();
    res.json(cursos);
});

// #GET - por ID
app.get('/curso', async function(req, res){
    let curso = await selectId(req.body.id);
    res.json(curso);
});

// #POST - Inserir dados completos na tabela.
app.post('/curso', function(req, res) {
    insertCurso(req.body);
    res.json({
        "statusCOde": 200
    });
});

// #PUT - update completo 
app.put('/curso', function(req, res) {
    if(req.body && !req.body.id) {
        res.json({
            "statusCode": 400,
            "msg": "Você precisa informar um id"
        })
    } else {
        updateCurso(req.body);
        res.json({
        "statusCOde": 200
        });
    }
     
});

//#DELETE - Deletar curso
app.get('/curso', async function(req, res){
    let curso = await deleteCurso(req.body.id);
    res.json(curso);

})
 */