class Picture {
  static all = [];

  constructor({ id, url, collection }) {
    this.id = id;
    this.url = url;
    // this.img_file = img_file;
    this.collection = collection;
    Picture.all.push(this);
    // event listener here
  }

  // static getCollection(collection) {
  //   const allCollectionPics = Picture.all.filter((pic) => {
  //     return pic.collection.name === collection.name;
  //   });
  //   // debugger;
  //   // console.log(allCollectionPics);
  //   for (const picture of allCollectionPics) {
  //     // pictureApiCall.getPicturesApi(picture);
  //     // const picEl = document.createElement("img");
  //     // picEl.src = picture.img_file;
  //     // const pictureBoard = document.querySelector(".picture-board");
  //     // pictureBoard.appendChild("picEl");
  //   }
  //   // collection;
  // }

  attachToDom() {
    debugger;
    // const
    // Collection.accessCollections(this);
  }
}
