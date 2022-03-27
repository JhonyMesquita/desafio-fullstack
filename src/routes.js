import { Router } from "express";
import { createTable, insertCurso, updateCurso, selectCursos, selectId, deleteCurso } from './controler/disciplinas.js';
import { selectAuth, insertAuth } from './controler/auth.js'

const router = Router();

router.get('/', (req, res)=>{
    res.send('Rotas UP')
})

// Rota Cursos bd
router.get('/curso', selectId);
router.get('/cursos', selectCursos);
router.post('/curso', insertCurso);
router.put('/curso', updateCurso);
router.delete('/curso', deleteCurso);


// Rota de auth 
router.get('/auth', selectAuth);
router.post('/authInsert', insertAuth);

export default router;