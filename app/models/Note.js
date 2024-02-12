import { generateColor } from "../utils/GenerateColor.js"
import { generateId } from "../utils/GenerateId.js"

export class Note {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.color = data.color || generateColor()
    // TODO timeCreated and timeUpdated need to be formated on page correctly
    this.timeCreated = data.timeCreated == undefined ? new Date() : new Date(data.timeCreated)
    this.timeUpdated = data.timeUpdated ? new Date(data.timeUpdated) : new Date()
    this.body = data.body || ''
  }
  
  get NoteListHTMLTemplate() {
    return /*html*/ `
  <p id="${this.id}" 
  onclick="app.NotesController.setActiveNote('${this.id}')" 
  class="selectable rounded p-2 ${this.color}" 
  role="button">${this.name}</p>
  `
}

get ActiveNoteHTMLTemplate() {
  return /*html*/ `
  <div class="bg-purple-light gray-light rounded shadow m-3">
    <section class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-between p-4">
          <h1>Title:<span onclick="app.NotesController.editActiveNoteTitle()" class="${this.color}"> ${this.name} <i class="mdi mdi-icons-pencil"></i></span></h1>
          <button onclick="app.NotesController.resetActiveNote()" type="button" class="btn btn-danger shadow px-3">x</button>
        </div>  
        <div class="col-4 p-4">
          <p>Created at: ${this.timeCreatedDate} ${this.timeCreatedTime}</p>
          <p>Updated at: ${this.timeUpdatedDate} ${this.timeUpdatedTime}</p>
          <p>Words: ; Characters: ${this.body.length}</p>
          <button onclick="app.NotesController.removeNote('${this.id}')" type="button" class="btn btn-outline-danger shadow">Delete</button>
          <button onclick="app.NotesController.updateActiveNote()" type="button" class="btn btn-success shadow mx-3">Save</button>
        </div>
        <div class="col-md-8">
          <textarea id="activeNoteTextarea" onblur="app.NotesController.updateActiveNote()" class="m-4 p-3 bg-gray-light rounded shadow" name="body" id="noteInformation" cols="50" rows="15" width="100">${this.body}</textarea> 
        </div>
      </div>
    </section>
  </div>
  `
}

get timeCreatedDate() {
  return this.timeCreated.toLocaleDateString()
}

get timeCreatedTime() {
  return this.timeCreated.toLocaleTimeString()
}
get timeUpdatedDate() {
  return this.timeUpdated.toLocaleDateString()
}

get timeUpdatedTime() {
  return this.timeUpdated.toLocaleTimeString()
}

}