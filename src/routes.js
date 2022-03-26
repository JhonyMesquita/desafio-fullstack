import { Router } from "express";
import { createTable, insertCurso, updateCurso, selectCursos, selectId, deleteCurso } from './controler/disciplinas.js';

const router = Router();

router.get('/', (req, res)=>{
    res.send('Rotas UP')
})

router.get('/curso', selectId);
router.get('/cursos', selectCursos);
router.post('/', insertCurso);
router.put('/', updateCurso);
router.delete('/', deleteCurso);

export default router;