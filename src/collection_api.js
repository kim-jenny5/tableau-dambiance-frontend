class CollectionApi {
  constructor(url) {
    this.url = url;
  }

  getCollectionsApi(user) {
    fetch(`${this.url}/collections`)
      .then((resp) => resp.json())
      .then((data) => {
        const collections = data.filter((c) => c.user.id === user.id);
        for (const collection of collections) {
          // new Collection(collection);
          const c = new Collection(collection);
          c.clickOnCollection();
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
        c.accessCollection();
      });
  }

  // renameCollection(collection) {
  //   const { name, id } = collection;

  //   const collectionInfo = {
  //     name,
  //     id,
  //     user: collection.user,
  //   };

  //   const configObj = {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(collectionInfo),
  //   };

  //   fetch(`${this.url}/collections/${id}`, configObj).then(() => {
  //     collection.accessCollection();
  //   });
  // }

  deleteCollectionApi(id) {
    fetch(`${this.url}/collections/${id}`, { method: "DELETE" })
      .then((resp) => resp.json())
      .then((data) => {
        alert(data.message);
      });
  }
}
