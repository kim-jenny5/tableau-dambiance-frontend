class Picture {
  static all = [];

  constructor({ id, url, collection }) {
    this.id = id;
    this.url = url;
    this.collection = collection;
    Picture.all.push(this);
    // event listener here
  }

  attachToDom() {
    const picEl = document.createElement("img");
    picEl.src = `${base_url}${this.url}`;
    pictureBoard.appendChild(picEl);
  }
}
