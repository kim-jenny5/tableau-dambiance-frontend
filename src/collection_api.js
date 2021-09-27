class CollectionApi {
  constructor(url) {
    this.url = url;
  }

  getCollections() {
    fetch(this.url + `/collections`)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }
}
