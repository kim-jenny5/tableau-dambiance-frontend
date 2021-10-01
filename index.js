const base_url = `http://localhost:3000`;
const collectionApiCall = new CollectionApi(base_url);
const userApiCall = new UserApi(base_url);
const pictureApiCall = new PictureApi(base_url);

const collectionsDisplay = document.querySelector(".collections-display");
const pictureBoard = document.querySelector(".picture-board");
const title = document.querySelector(".file-name");

const logo = document.querySelectorAll(".logo");

collectionApiCall.getCollectionsApi();
userApiCall.getUsersApi();
pictureApiCall.getAllPicturesApi();

for (const word of logo) {
  word.addEventListener("click", function () {
    if (startingPg.style.display === "none") {
      startingPg.style.display = "block";
      newUserPg.style.display = "none";
      returningUserPg.style.display = "none";
    }
  });
}

qMark.addEventListener("click", function () {
  if (aboutMenu.style.display === "none") {
    aboutMenu.style.display = "block";
    qMark.style.display = "none";
    xBtn.style.display = "block";
  } else {
    aboutMenu.style.display = "none";
  }
});

xBtn.addEventListener("click", function () {
  if (xBtn.style.display === "block") {
    xBtn.style.display = "none";
    qMark.style.display = "block";
    aboutMenu.style.display = "none";
  } else {
    aboutMenu.style.display = "block";
  }
});

about.addEventListener("click", function () {
  if (aboutGrp.style.display === "none") {
    aboutGrp.style.display = "block";
  } else {
    aboutGrp.style.display = "none";
  }
});

aboutDev.addEventListener("click", function () {
  for (const element of aboutDevGrp) {
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
});
