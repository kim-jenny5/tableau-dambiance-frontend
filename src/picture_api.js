class PictureApi {
  constructor(url) {
    this.url = url;
  }

  getAllPicturesApi() {
    fetch(`${this.url}/pictures`)
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

  // uploadNewPicture(collection, pic) {
  //   console.log(collection);
  //   console.log(pic);

  //   const picture = {
  //     // filename: pic,
  //     collection_id: collection.id,
  //   };

  //   const configObj = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(picture),
  //   };

  //   fetch(`${this.url}/pictures`, configObj)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       debugger;
  //       // console.log(data);
  //     });

  //   // console.log(picture);
  //   // debugger;

  //   // debugger;
  // }
}
