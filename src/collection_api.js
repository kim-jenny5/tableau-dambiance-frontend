class CollectionApi {
  constructor(url) {
    this.url = url;
  }

  getCollectionsApi() {
    fetch(this.url + `/collections`)
      .then((resp) => resp.json())
      .then((data) => {
        for (const collection of data) {
          new Collection(collection);
        }
      })
      .catch();
  }
}
