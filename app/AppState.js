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
  activeNote = new MainImage
}

export const AppState = createObservableProxy(new ObservableAppState())