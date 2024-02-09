import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Note } from './models/Note.js'
import { MainImage } from "./models/MainImage.js"
class ObservableAppState extends EventEmitter {

  // /**@type {import('./models/Example.js').Example[]} */
  // examples = []

  /**@type {Note[]} */
  notes = []

  /**@type {Note | MainImage} */
  activeNote = new MainImage({source: 'assets/img/typewritter_unDraw.svg',  title:'You have not selected a note yet.', alt: 'typewritter - a space to jot down notes'})
}

export const AppState = createObservableProxy(new ObservableAppState())