class CollectionApi {
  constructor(url) {
    this.url = url;
  }

  getCollections() {
    fetch(this.url + `/collections`)
      .then((resp) => resp.json())
      .then((data) => {
        for (const collection of data) {
          const c = new Collection(collection);
          c.getCollection();
        }
      })
      .catch();
  }
}
