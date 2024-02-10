import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { loadState, saveState } from "../utils/Store.js"

function _saveNotes() {
  saveState('notes', AppState.notes)
}

class NotesService {
  
  setActiveNote(noteId){
    // console.log('received a set active note request from the controller for', noteId)
    
    // finds the "Note" by the  given ID
    const foundNote = AppState.notes.find(note => note.id == noteId)
    // Sets the Active Note to the Found Note with the matching ID
    AppState.activeNote = foundNote
  }
  
  createNewNote(noteFormData) {
    const newNote = new Note(noteFormData)
    AppState.notes.push(newNote)
    
    _saveNotes()
  }

}

export const notesService = new NotesService()