class PictureApi {
  constructor(url) {
    this.url = url;
  }

  getPictures() {
    fetch(this.url + `/pictures`)
      .then((resp) => resp.json())
      .then((data) => {
        for (const picture of data) {
          const p = new Picture(picture);
          debugger;
        }
      })
      .catch();
  }
}
