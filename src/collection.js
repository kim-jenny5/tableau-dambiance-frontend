class Collection {
  constructor({ id, name, pictures, user, created_at }) {
    this.id = id;
    this.name = name;
    this.pictures = pictures;
    this.user = user;
    this.created_at = created_at;
  }
}

const hamburger = document.querySelector(".hamburger");
const xCollectionsBtn = document.querySelector(".close-collections-btn");

hamburger.addEventListener("click", function () {
  // debugger;
  if (xCollectionsBtn.style.display === "none") {
    // debugger;
    hamburger.style.display = "none";
    xCollectionsBtn.style = "block";
  }
});
