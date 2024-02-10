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
  <p id="${this.id}" onclick="app.NotesController.setActiveNote('${this.id}')" class="selectable rounded p-2" role="button">${this.name}</p>
  `
}

get ActiveNoteHTMLTemplate() {
  return /*html*/ `
  <section class="container">
          <div class="row">
            <div class="col-12 d-flex justify-content-between p-4">
              <h1>Title:<span class="${this.color}"> ${this.name} </span></h1>
              <button type="button" class="btn btn-danger shadow px-3">x</button>
            </div>  
            <div class="col-4 p-4">
              <p>Created at: ${this.timeCreated}</p>
              <p>Updated at: ${this.timeUpdated}</p>
              <p>Words: 0; Characters: 0</p>
              <button type="button" class="btn btn-outline-danger shadow">Delete</button>
              <button type="button" class="btn btn-success shadow mx-3">Save</button>
            </div>
            <div class="col-md-8">
              <textarea class="m-4 p-3 bg-gray-light rounded shadow" name="body" id="noteInformation" cols="50" rows="15"></textarea> 
            </div>
          </div>
        </section>
  `
}
}