class CollectionApi {
  constructor(url) {
    this.url = url;
  }

  getCollections() {
    fetch(this.url + `/collections`)
      .then((resp) => resp.json())
      .then((data) => {
        for (const collection of data) {
          let c = new Collection(collection);
          debugger;
        }
      })
      .catch();
  }
}
