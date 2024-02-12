import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawNotesList() {
  // console.log('draw notes list function called') // works!
  
  const notesList = AppState.notes
  let htmlString = ''
  let htmlCount = notesList.length

  notesList.forEach(note => htmlString += note.NoteListHTMLTemplate)

  setHTML('notesListCounter', htmlCount)
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

  editActiveNoteTitle() {
    console.log("editing active note title")
    notesService.editActiveNoteTitle()
  }

  updateActiveNoteTitle() {
    const titleElem = document.getElementById('activeNoteTitle')

    // @ts-ignore 
    const updatedNoteTitle = titleElem.value
    notesService.updateActiveNoteTitle(updatedNoteTitle)
  }
  updateActiveNote() {
    const textareaElem = document.getElementById('activeNoteTextarea')

    // @ts-ignore 
    const updatedNoteBody = textareaElem.value
    notesService.updateActiveNote(updatedNoteBody)
  }

  createNewNote() {
    event.preventDefault()
    // console.log('creating a new note') 
    const form = event.target
    const noteFormData = getFormData(form)
    notesService.createNewNote(noteFormData)
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
      this.resetActiveNote()
    }
  }

  resetActiveNote() {
    notesService.resetActiveNote()
  }


}