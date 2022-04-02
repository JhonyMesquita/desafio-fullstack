import { openDb } from '../configDB.js';

export async function createTable() {
     openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS disciplinas ( id INTEGER PRIMARY KEY AUTOINCREMENT, disciplina TEXT, professor TEXT, sala INTEGER, hora_i TEXT, hora_f TEXT)');
    })
}

export async function selectCursos(req, res) {
    openDb().then( db=>{
       db.all('SELECT * FROM disciplinas').then(cursos=>res.json(cursos))
       
   });

}

export async function selectId(req, res) {
    let id = req.body.id;
    openDb().then( db=>{
       db.get('SELECT * FROM disciplinas WHERE id=?', [id]).then(cursoId=>res.json(cursoId))
   });
    
}

export async function insertCurso(req, res) {
    let curso = req.body;
    openDb().then(db=>{
       db.run('INSERT INTO disciplinas (disciplina, professor, sala, hora_i, hora_f) VALUES (?, ?, ?, ?, ?)', [curso.disciplina, curso.professor, curso.sala, curso.hora_i, curso.hora_f]);
   });
   res.json({
    "statusCode": 200
    })
}

export async function updateCurso(req, res) {
    let curso = req.body;
    openDb().then(db=>{
       db.run('UPDATE disciplinas SET disciplina=?, professor=?, sala=?, hora_i=?, hora_f=? WHERE id=?', [curso.disciplina, curso.professor, curso.sala, curso.hora_i, curso.hora_f, curso.id]);
   });
   res.json({
    "statusCode": 200
    })
}



export async function deleteCurso(req, res) {
    let id = req.body.id;
    return openDb().then( db=>{
       return db.run('DELETE * FROM disciplinas WHERE id=?', [id]).then(deletCurso=>res.json(deletCurso))
   });
   res.json({
    "statusCode": 200
    })
}