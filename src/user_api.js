class UserApi {
  constructor(url) {
    this.url = url;
  }

  getUsersApi() {
    fetch(this.url + `/users`)
      .then((resp) => resp.json())
      .then((data) => {
        for (const user of data) {
          const u = new User(user);
          u.findUser();
        }
      })
      .catch();
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
