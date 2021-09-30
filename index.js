const base_url = `http://localhost:3000`;
const collectionApiCall = new CollectionApi(base_url);
const userApiCall = new UserApi(base_url);

const logo = document.querySelectorAll(".logo");

collectionApiCall.getCollections();
userApiCall.getUsers();

for (const word of logo) {
  word.addEventListener("click", function () {
    if (startingPg.style.display === "none") {
      startingPg.style.display = "block";
      newUserPg.style.display = "none";
      returningUserPg.style.display = "none";
    }
  });
}
