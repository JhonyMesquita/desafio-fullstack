import { Router } from "express";
import { createTable, insertCurso, updateCurso, selectCursos, selectId, deleteCurso } from './controler/disciplinas.js';
import { selectUser, insertUser, selectAll } from './controler/user.js'

const router = Router();

router.get('/', (req, res)=>{
    res.send('Rotas UP')
})

// Rota Cursos bd
router.get('/curso', selectId);
router.get('/cursos', selectCursos);
router.post('/cadastro/curso', insertCurso);
router.patch('/curso/update', updateCurso);
router.delete('/cursos/:id', deleteCurso);


// Rota de auth 
router.get('/user', selectUser);
router.post('/insertUser', insertUser);
router.get('/all', selectAll);

export default router;