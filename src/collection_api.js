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

  createCollections(user) {
    // console.log(user);
    // debugger;

    const collectionInfo = {
      // debugger
      collection: {
        name: collectionName.value,
        user_id: user.id;
      },
    };

    // debugger;

    fetch(this.url + `/collections`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  }
}
