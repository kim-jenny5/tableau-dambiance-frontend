const base_url = `http://localhost:3000`;
const collectionApiCall = new CollectionApi(base_url);
const userApiCall = new UserApi(base_url);

collectionApiCall.getCollections();
userApiCall.getUsers();
