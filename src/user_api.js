class UserApi {
  constructor(url) {
    this.url = url;
  }

  getUsers() {
    fetch(this.url + `/users`)
      .then((resp) => resp.json())
      .then((data) => {
        for (const user of data) {
          //   new User(user);
          //   debugger;
        }
      })
      .catch();
  }

  createUsers() {
    const user = {
      //   user: {
      username: newUsername.value,
      //   },
    };
    debugger;
    //     fetch(this.url + `/users`)
    //       .then((resp) => resp.json())
    //       .then((data) => {
    //   })
  }
}
