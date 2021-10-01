class Picture {
  static all = [];

  constructor({ id, img_file, collection }) {
    this.id = id;
    this.img_file = img_file;
    this.collection = collection;
    Picture.all.push(this);
  }

  static getCollection(collection) {
    const allCollectionPics = Picture.all.filter((pic) => {
      return pic.collection.name === collection.name;
    });
    // debugger;
    // console.log(allCollectionPics);
    for (const picture of allCollectionPics) {
      debugger;
    }
    // collection;
  }
}
