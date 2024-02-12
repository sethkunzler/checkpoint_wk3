import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { loadState, saveState } from "../utils/Store.js"


function _saveNotes() {
  saveState('notes', AppState.notes)
}
function _loadNotes() {
  AppState.notes = loadState('notes', [Note])
}

class NotesService {
  
  constructor() {
    _loadNotes()
  }
  
  setActiveNote(noteId){
    // console.log('received a set active note request from the controller for', noteId)
    
    // finds the "Note" by the  given ID
    const foundNote = AppState.notes.find(note => note.id == noteId)
    // Sets the Active Note to the Found Note with the matching ID
    AppState.activeNote = foundNote
  }
  
  editActiveNoteTitle() {
    const activeNote = AppState.activeNote
    activeNote.titleIsEditable = true
    AppState.emit('activeNote')
  }
  updateActiveNoteTitle(updatedNoteTitle) {
    const activeNote = AppState.activeNote

    activeNote.name = updatedNoteTitle
    activeNote.timeUpdated = new Date()
    activeNote.titleIsEditable = false
    _saveNotes
    AppState.emit('activeNote')
  }
  updateActiveNote(updatedNoteBody) {
    const activeNote = AppState.activeNote

    activeNote.body = updatedNoteBody
    activeNote.timeUpdated = new Date()
    _saveNotes
    AppState.emit('activeNote')
  }
  
  createNewNote(noteFormData) {
    const newNote = new Note(noteFormData)
    AppState.notes.push(newNote)
    _saveNotes()
  }

  removeNote(noteId) {
    const notesIndex = AppState.notes.findIndex(note => note.id == noteId)

    if (notesIndex == -1) {
      // something silly that will never trigger unless you really, really wanted it to --> 
      throw new Error("HAHAHA you will never be a real gotchamon master, your gotchamons escaped because your notes index is -1 which should have never happened because arrays don't count to negative 1!")
    }

    AppState.notes.splice(notesIndex, 1)
  
    _saveNotes()
    // TODO make sure to add the reset active note as well 
  }

  resetActiveNote() {
    AppState.activeNote = null
  }

}

export const notesService = new NotesService()