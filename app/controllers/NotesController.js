import { AppState } from "../AppState.js"
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

function _drawNotesList() {
  // console.log('draw notes list function called') // works!
  
  const notesList = AppState.notes
  let htmlString = ''
  
  notesList.forEach(note => htmlString += note.NoteListHTMLTemplate)

  setHTML('notesList', htmlString)
}

function _drawActiveNote() {
  // console.log("draw active note function called") // works!
  
  const activeNote = AppState.activeNote
  
  setHTML('activeNote', activeNote.ActiveNoteHTMLTemplate)
}


export class NotesController {
  constructor() {
    // console.log('drawing Notes Controller') // works!
    _drawNotesList()

    // event listeners
    AppState.on('notes', _drawNotesList)
    AppState.on('activeNote', _drawActiveNote)
  }

  setActiveNote(noteId) {
    // console.log('setting active note') // works!
    notesService.setActiveNote(noteId)
  }

  createNewNote(data) {
    event.preventDefault()
    console.log('creating a new note')
    const form = event.target
    const noteFormData = getFormData(form)
    notesService.createNewNote(noteFormData)
  }


}