class Picture {
  static all = [];

  constructor({ id, pic_url, collection }) {
    this.id = id;
    this.pic_url = pic_url;
    this.collection = collection;
    Picture.all.push(this);
  }

  attachToDom() {
    const picEl = document.createElement("img");
    picEl.src = `${this.pic_url}`;

    pictureBoard.appendChild(picEl);
  }
}
