class PictureApi {
  constructor(url) {
    this.url = url;
  }

  getPicturesApi(collection) {
    fetch(`${this.url}/pictures`)
      .then((resp) => resp.json())
      .then(() => {
        for (const picture of collection.pictures) {
          const p = new Picture(picture);
          p.attachToDom();
        }
      })
      .catch();
  }

  uploadPictures(formData) {
    const configObj = {
      method: "POST",
      body: formData,
    };

    fetch(`${this.url}/pictures`, configObj)
      .then((resp) => resp.json())
      .then((data) => {
        const p = new Picture(data);
        console.log(p);
        p.attachToDom();
      })
      .catch();
  }
}
