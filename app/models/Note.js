import { generateColor } from "../utils/GenerateColor.js"
import { generateId } from "../utils/GenerateId.js"
import { AppState } from "../AppState.js"

export class Note {
  constructor(data) {
    this.id = generateId()
    this.titleIsEditable = false
    this.name = data.name
    this.color = data.color || generateColor()
    this.timeCreated = data.timeCreated == undefined ? new Date() : new Date(data.timeCreated)
    this.timeUpdated = data.timeUpdated ? new Date(data.timeUpdated) : new Date()
    this.body = data.body || ''
  }
  
  get NoteListHTMLTemplate() {
    return /*html*/ `
  <p id="${this.id}" 
  onclick="app.NotesController.setActiveNote('${this.id}'), this.activeNoteStatus()" 
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
          <div id="activeNoteTitle">
            <!-- STUB this section has been stubbed out -->
            <!-- FIXME the text editor and the color selector do not pop up -->
            <h1>Title: 
              <span onclick="app.NotesController.editActiveNoteTitle()" class="selectable rounded px-2">
                <span class="${this.color}">${this.name}</span> <i class="fs-6 mdi mdi-pencil"></i>
              </span>
            </h1>
          </div>
          <button onclick="app.NotesController.resetActiveNote()" type="button" class="btn btn-danger shadow px-3">x</button>
        </div>  
        <div class="col-4 p-4">
          <p>Created at: ${this.timeCreatedDate} ${this.timeCreatedTime}</p>
          <p>Updated at: ${this.timeUpdatedDate} ${this.timeUpdatedTime}</p>
          <p>Words: ${this.wordCount}; Characters: ${this.body.length}</p>
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

get activeNoteStatus() {
  if (this.titleIsEditable) {
    return this.titleEditor
  }
  else {return this.activeNoteStatus}
}

get activeNoteTitle() {
  return /*html*/ `
    <h1>Title: 
      <span onclick="app.NotesController.editActiveNoteTitle()" class="selectable rounded px-2">
        <span class="${this.color}">${this.name}</span> <i class="fs-6 mdi mdi-pencil"></i>
      </span>
    </h1>
  `}

get titleEditor() {
  return /*html*/ `
    <form action="">
    <textarea id="activeNoteTextarea" class="m-4 p-3 bg-gray-light rounded shadow" name="body" id="noteInformation" cols="20" rows="1" width="25" minlength="3" maxlength="15">${this.body}</textarea> 
    <div class="form-floating mb-3">
      <select class="form-select" id="color" aria-label="Floating label select example" name="color" required>
        <option disabled selected value="">Choose a Color</option>
        <option value="">Random Color</option>
        <option value="yellow">yellow</option>
        <option value="green">green</option>
        <option value="pink-light">hot pink</option>
        <option value="pink-dark">purple</option>
        <option value="orange-light">bright orange</option>
        <option value="orange-red">red orange</option>
        <option value="orange-dark">burnt orange</option>
      </select>
      <label for="color">Color</label>
    </div>
    <button onclick="app.NotesController.updateActiveNoteTitle()" type="submit">Done</button>
    </form>
  `
}

get wordCount() {
  const wordsArray = this.body.split(' ')
  return wordsArray.filter(word => word !== '').length
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