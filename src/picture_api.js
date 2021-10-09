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

  // uploadPictures(collection_id, img_file) {
  uploadPictures(formData) {
    console.log(formData);

    // const picture = {
    //   collection_id,
    //   img_file: img_file,
    // };

    // const configObj = {
    //   method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    //   Accept: "application/json",
    // },
    // body: JSON.stringify(picture),
    // };

    // console.log(picture);
    // console.log(configObj);

    // debugger;

    // fetch(`${this.url}/pictures`, configObj)
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     console.log(data);
    //     debugger;
    //   });

    // console.log(picture);
    // debugger;

    // debugger;
  }
}
