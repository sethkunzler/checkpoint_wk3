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

  removeNote(noteId) {
    const notesIndex = AppState.notes.findIndex(note => note.id == noteId)

    if (notesIndex == -1) {
      // something silly that will never triger unless you really, really wanted it to --> 
      throw new Error('HAHAHA you will never be a real gotchamon master, your gotchamons escaped because your notes index is -1 which should have never happened because arrays dont count to negative 1!')
    }

    AppState.notes.splice(notesIndex, 1)

    _saveNotes()
    // TODO check to make sure that this function is finished in the Controller and that you have referenced it on the view.
    // TODO Check to make sure you can delete a Jot Note
  }

}

export const notesService = new NotesService()