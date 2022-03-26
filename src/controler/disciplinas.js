import { openDb } from '../configDB.js';

export async function createTable() {
     openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS disciplinas ( id INTEGER PRIMARY KEY AUTOINCREMENT, disciplina TEXT, professor TEXT, sala INTEGER, hora_i TEXT, hora_f TEXT)');
    })
}

export async function insertCurso(curso) {
    openDb().then(db=>{
       db.run('INSERT INTO disciplinas (disciplina, professor, sala, hora_i, hora_f) VALUES (?, ?, ?, ?, ?)', [curso.disciplina, curso.professor, curso.sala, curso.hora_i, curso.hora_f]);
   });
}

export async function updateCurso(curso) {
    openDb().then(db=>{
       db.run('UPDATE disciplinas SET disciplina=?, professor=?, sala=?, hora_i=?, hora_f=? WHERE id=?', [curso.disciplina, curso.professor, curso.sala, curso.hora_i, curso.hora_f]);
   });
}

export async function selectCursos() {
    return openDb().then( db=>{
       return db.all('SELECT * FROM disciplinas').then(res=>res)
   });
}

export async function selectId(id) {
    return openDb().then( db=>{
       return db.all('SELECT * FROM disciplinas WHERE id=?', [id]).then(res=>res)
   });
}

export async function deleteCurso(id) {
    return openDb().then( db=>{
       return db.all('DELETE * FROM disciplinas WHERE id=?', [id]).then(res=>res)
   });
}