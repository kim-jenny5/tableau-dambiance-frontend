class CollectionApi {
  constructor(url) {
    this.url = url;
  }

  getCollectionsApi() {
    fetch(`${this.url}/collections`)
      .then((resp) => resp.json())
      .then((data) => {
        for (const collection of data) {
          new Collection(collection);
        }
      })
      .catch();
  }

  createCollections(user) {
    const collection = {
      name: collectionName.value,
      user_id: user.id,
    };

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(collection),
    };

    // fetch(this.url + `/collections`, collection);
    fetch(`${this.url}/collections`, configObj)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  }
}
