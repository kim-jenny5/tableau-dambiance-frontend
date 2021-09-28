const base_url = `http://localhost:3000`;
const collectionApiCall = new CollectionApi(base_url);

collectionApiCall.getCollections();

// getting elements from DOM
const qMark = document.querySelector(".about-btn");

// console.log(qMark);
qMark.addEventListener("click", function (e) {
  debugger;
  //   console.log("Hello");
});
