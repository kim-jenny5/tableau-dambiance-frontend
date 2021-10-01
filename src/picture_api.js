class PictureApi {
  constructor(url) {
    this.url = url;
  }

  getAllPicturesApi() {
    fetch(this.url + `/pictures`)
      .then((resp) => resp.json())
      .then((data) => {
        for (const picture of data) {
          const p = new Picture(picture);
          // debugger;
        }
      })
      .catch();
  }

  getPicturesApi(picture) {
    debugger;
    fetch(this.url + `/pictures/${picture.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        debugger;
        // for (const picture of data) {
        //   const p = new Picture(picture);
        //   p.attachPictures();
        // }
      })
      .catch();
  }
}
