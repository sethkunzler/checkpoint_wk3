import { NotesController } from "./controllers/NotesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [NotesController],
    view: /*html*/``
  }
  // {
  //   path: '#/about',
  //   view: 'app/views/AboutView.html'
  // }
])