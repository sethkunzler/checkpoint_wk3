import { generateColor } from "../utils/GenerateColor.js"
import { generateId } from "../utils/GenerateId.js"

export class Note {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.color = data.color || generateColor()
    this.timeCreated = data.timeCreated == undefined ? new Date() : new Date(data.timeCreated)
    this.timeUpdated = data.timeUpdated ? new Date(data.timeUpdated) : new DataTransfer()
    this.body = data.body || ''
  }
}

get NoteListHTMLTemplate() {
  return /*html*/ `
  <p id="${this.id}">Title ${this.name}<span class="${this.color}"></span></p>
  `
}

get ActiveNoteHTMLTemplate() {
  return /*html*/ `
  <h1>Title: ${this.name}</h1>
  <textarea name="body" id="noteInformation" cols="30" rows="10">${this.body}</textarea>
  `
}