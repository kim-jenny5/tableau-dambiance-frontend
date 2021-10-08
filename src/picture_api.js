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

  uploadPictures(picture) {
    console.log(picture);

    debugger;
    // console.log(collection);
    // console.log(pic);

    // const picture = {
    //   // filename: pic,
    //   collection_id: collection.id,
    // };

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(picture),
    };

    fetch(`${this.url}/pictures`, configObj)
      .then((resp) => resp.json())
      .then((data) => {
        debugger;
        // console.log(data);
      });

    // console.log(picture);
    // debugger;

    // debugger;
  }
}
