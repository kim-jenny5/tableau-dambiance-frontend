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
          // p.attachToDom();
          new Picture(picture);
          // debugger;
        }
      })
      .catch();
  }

  uploadNewPicture(picture) {
    console.log(picture);
    debugger;

    // debugger;
  }
}
