import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { loadState, saveState } from "../utils/Store.js"

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

function _saveNotes() {
  saveState('notes', AppState.notes)
}
function _loadNotes() {
  AppState.notes = loadState('notes', [Note])
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
    // console.log('creating a new note') 
    const form = event.target
    const noteFormData = getFormData(form)
    notesService.createNewNote(noteFormData)
    _saveNotes()
  }

  async removeNote(noteId) {
    // debugger
    const wantsToRemove = await Pop.confirm('Are you sure you want to delete this note?')
    // The Pop up pops up but I get some "incorrect labelling of form errors" popping up in the console.
    // I don't know why, but I think its because of how I wrote the sweet alert.
    // FIXME ask in the the evaluation. 
    if(!wantsToRemove) {
      console.log("action canceled")
      return
    } else {
      notesService.removeNote(noteId)
    // FIXME ^^ The problem is here between the two FIXMEs
      _saveNotes()
      this.resetActiveNote()
    }
  }

  resetActiveNote() {
    notesService.resetActiveNote()
  }


}