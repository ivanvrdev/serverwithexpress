const router = require('express').Router();
const {route4GET, route4POST, route4PUT, route4DeleteFisic, route4DeleteLogic} = require('../controllers/notes.controllers');

router.get('/notes/all', route4GET);
router.post('/notes/new', route4POST);
router.put('/notes/edit', route4PUT);
//Eliminación lógica
router.put('/notes/delete', route4DeleteLogic);
//Eliminación física
router.delete('/notes/delete', route4DeleteFisic);

module.exports = router;
