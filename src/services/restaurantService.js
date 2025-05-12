const db = require("../firebase/firebase");
const collection = db.collection("restaurants");

exports.createRestaurant = async (data) => {
  const docRef = await collection.add(data);
  return docRef.id;
};

exports.getRestaurants = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

exports.getRestaurantById = async (id) => {
  const doc = await collection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

exports.updateRestaurant = async (id, data) => {
  await collection.doc(id).update(data);
};

exports.deleteRestaurant = async (id) => {
  await collection.doc(id).delete();
};
