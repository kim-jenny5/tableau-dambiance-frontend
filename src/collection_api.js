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

    fetch(`${this.url}/collections`, configObj)
      .then((resp) => resp.json())
      .then((data) => {
        const c = new Collection(data);
        c.appendCollections();
        c.accessCollection();
        // new Collection(data);
        // title.innerHTML = data.name;
        // user.gettingCollections();
      });
  }

  renameCollection(collection) {
    const { name, id, user } = collection;

    const collectionInfo = {
      name,
      id,
      user: collection.user,
    };

    console.log(collectionInfo);

    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(collectionInfo),
    };

    console.log(configObj);

    // debugger;

    fetch(`${this.url}/collections/${id}`, configObj).then(() => {
      // debugger;
      collection.accessCollection(collection.name);
      // collection.adjustingCollection();
    });
    // .then((resp) => resp.json())
    // .then((data) => {
    //   // data.accessCollection();
    //   console.log(data);
    //   debugger;
    // });
  }
}
