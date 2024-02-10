import { AppState } from "../AppState.js"
import { notesService } from "../services/NotesService.js";
import { setHTML } from "../utils/Writer.js";

function _drawNotesList() {
  console.log('draw notes list function called')
  
  const notesList = AppState.notes
  let htmlString = ''
  
  notesList.forEach(note => htmlString += note.NoteListHTMLTemplate)

  setHTML('notesList', htmlString)
}

function _drawActiveNote() {
  console.log("draw active note function called")
  
  const activeNote = AppState.activeNote
  
  setHTML('activeNote', activeNote.ActiveNoteHTMLTemplate)
}


export class NotesController {
  constructor() {
    // console.log('drawing Notes Controller')
    _drawNotesList()

    // event listeners
    AppState.on('notes', _drawNotesList)
    AppState.on('activeNote', _drawActiveNote)
  }

  setActiveNote(noteId) {
    console.log('setting active note')
    notesService.setActiveNote(noteId)
  }


}