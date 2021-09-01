const ctrlNotes = {};
const Note = require('../models/Notes');

//Devuelve todas las notas
ctrlNotes.route4GET = async (req, res) =>{
    const notes = await Note.find({active: true})
    res.json(notes); 
}

//Almacena notas nuevas
ctrlNotes.route4POST = async (req, res)=>{
    const {title, description} = req.body;
    const note = new Note({title, description, active: true});
    await note.save();

    res.json({message: 'Note created succesfully!'});
}

//Actualiza notas
ctrlNotes.route4PUT = async (req, res)=>{
    const {id, title, description} = req.body;

    const note = await Note.findByIdAndUpdate(id, {title, description}, {new: true});

    res.json({
        message: 'Note updated succesfully!',
        note
    })
}

//Eliminación física
ctrlNotes.route4DeleteFisic = async (req, res) =>{
    const {id} = req.body;

    try{
        await Note.findByIdAndDelete(id);

        res.json({
            message: 'Note deleted succesfuly!'
        });
    } catch(err) {
        console.log('Error to delete the note: ', err);
    }
}

//Eliminación lógica
ctrlNotes.route4DeleteLogic = async (req, res) =>{
    const {id} = req.body;
    const note = await Note.findByIdAndUpdate(id, {active: false}, {new: true});

    res.json({message: 'Note deleted succesfuly!!!'}, note);
}

module.exports = ctrlNotes;

