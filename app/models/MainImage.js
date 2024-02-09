export class MainImage {
  constructor(data) {
    this.source = data.source
    this.alt = data.alt
    this.title = data.title
  }
  get mainImageTemplate() {
    return /*html*/ `
    <img class="img-main-typewritter" src="${this.source}" alt="${this.alt}" title="${this.title}">
    `
  }
}