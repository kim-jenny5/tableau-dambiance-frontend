class PictureApi {
  constructor(url) {
    this.url = url;
  }

  getPictures() {
    fetch(this.url + `/pictures`)
      .then((resp) => resp.json())
      .then((data) => {
        debugger;
      })
      .catch();
  }
}
