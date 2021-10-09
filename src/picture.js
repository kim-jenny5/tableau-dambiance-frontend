class Picture {
  static all = [];

  constructor({ id, url, collection }) {
    this.id = id;
    this.url = url;
    this.collection = collection;
    Picture.all.push(this);
  }

  attachToDom() {
    const picEl = document.createElement("img");
    picEl.src = `${this.url}`;

    pictureBoard.appendChild(picEl);
  }
}
