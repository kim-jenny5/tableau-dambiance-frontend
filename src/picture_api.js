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
      });
  }

  uploadPictures(formData) {
    const configObj = {
      method: "POST",
      body: formData,
    };

    fetch(`${this.url}/pictures`, configObj)
      .then((resp) => resp.json())
      .then((data) => {
        if (data["error"]) {
          alert(data["error"]);
        } else {
          const p = new Picture(data);
          p.attachToDom();
        }
      });
  }
}
