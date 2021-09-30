class UserApi {
  constructor(url) {
    this.url = url;
  }

  getUsers() {
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
    debugger;
  }
}
