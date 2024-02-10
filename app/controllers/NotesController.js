import { AppState } from "../AppState.js"
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
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
  const mainImage = AppState.mainImage

  if (!activeNote) {
    setHTML('activeNote', mainImage.mainImageTemplate)
    return
  } else {
    setHTML('activeNote', activeNote.ActiveNoteHTMLTemplate)
  }
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

  createNewNote() {
    event.preventDefault()
    console.log('creating a new note')
    const form = event.target
    const noteFormData = getFormData(form)
    notesService.createNewNote(noteFormData)
  }

  async removeNote(noteId) {
    const wantsToRemove = await Pop.confirm('Are you sure you want to delete this note?')
    if(!wantsToRemove) {
      return
    }
    notesService.removeNote(noteId)
    this.resetActiveNote()
  }

  resetActiveNote() {
    notesService.resetActiveNote()
  }


}