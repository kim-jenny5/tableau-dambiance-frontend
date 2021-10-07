class UserApi {
  constructor(url) {
    this.url = url;
  }

  getUsersApi(username) {
    fetch(this.url + `/users`)
      .then((resp) => resp.json())
      .then((data) => {
        const u = new User(data.find((u) => u.username === username));
        collectionApiCall.getCollectionsApi(u);
        u.setUpUsersPage();
        u.deletingCollection();
      })
      .catch(() => alert("Sorry! Username not found."));
  }

  createUsers() {
    const user = {
      username: newUsername.value,
    };

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch(`${this.url}/users`, configObj)
      .then((resp) => resp.json())
      .then((data) => {
        const newUser = new User(data);
        newUser.setUpUsersPage();
      });
  }
}
