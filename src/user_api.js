class UserApi {
  constructor(url) {
    this.url = url;
  }

  getUsers() {
    fetch(this.url + `/users`)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }
}
