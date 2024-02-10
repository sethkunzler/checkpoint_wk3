import { AppState } from "../AppState.js"

class NotesService {

  setActiveNote(noteId){
    console.log('received a set active note request from the controller for', noteId)
    // finds the "Note" by the  given ID
    const foundNote = AppState.notes.find(note => note.id == noteId)
    // Sets the Active Note to the Found Note with the matching ID
    AppState.activeNote = foundNote
  }


}

export const notesService = new NotesService()