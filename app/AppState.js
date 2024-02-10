import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Note } from './models/Note.js'
// @ts-ignore
import { MainImage } from "./models/MainImage.js"
class ObservableAppState extends EventEmitter {

  // /**@type {import('./models/Example.js').Example[]} */
  // examples = []

  /**@type {Note[]} */
  notes = [
    new Note({
      name: 'Name',
      body: 'just a Test',
      color: "yellow"
    })
  ]

  /**@type {Note | null} */
  activeNote = null
  //   new MainImage({
  //   source: 'assets/img/typewritter_unDraw.svg',  
  //   title:'You have not selected a note yet.', 
  //   alt: 'typewritter - a space to jot down notes'
  // })
}

export const AppState = createObservableProxy(new ObservableAppState())