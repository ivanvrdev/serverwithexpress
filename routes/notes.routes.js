const router = require('express').Router();
const {route4GET, route4POST, route4PUT, route4DeleteFisic, route4DeleteLogic} = require('../controllers/notes.controllers');

router.get('/get-notes', route4GET);
router.post('/post-notes', route4POST);
router.put('/edit-notes', route4PUT);
//Eliminación lógica
router.put('/delete-notes', route4DeleteLogic);
//Eliminación física
router.delete('/delete-notes', route4DeleteFisic);

module.exports = router;
