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
    // picEl.src = `${base_url}${this.url}`;
    picEl.src = `${this.url}`;

    pictureBoard.appendChild(picEl);
  }

  // uploadPictures() {

  // }

  // attachToDomOneColBase(picEl, arr) {
  //   picEl.src = `${base_url}${this.url}`;
  //   arr[0].appendChild(picEl);
  // }

  // attachToDomTwoCols(picEl, arr) {
  //   picEl.src = `${base_url}${this.url}`;
  //   // debugger;
  //   arr[1].style.display = "block";
  //   arr[0].style.flex = "50%";
  //   arr[1].style.flex = "50%";
  //   pictureBoard.appendChild(picEl);
  // }

  // attachToDomThreeCols(picEl, arr) {
  //   picEl.src = `${base_url}${this.url}`;
  //   arr[0].appendChild(picEl);
  //   arr[1].appendChild(picEl);
  //   arr[2].appendChild(picEl);
  // }
}
