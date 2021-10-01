class PictureApi {
  constructor(url) {
    this.url = url;
  }

  getAllPicturesApi() {
    fetch(this.url + `/pictures`)
      .then((resp) => resp.json())
      .then((data) => {
        for (const picture of data) {
          // const p = new Picture(picture);
          new Picture(picture);
          // debugger;
        }
      })
      .catch();
  }
}
