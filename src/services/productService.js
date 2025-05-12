const db = require("../firebase/firebase");
const collection = db.collection("products");

exports.createProduct = async (data) => {
  const docRef = await collection.add(data);
  return docRef.id;
};

exports.getProducts = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

exports.getProductById = async (id) => {
  const doc = await collection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

exports.updateProduct = async (id, data) => {
  await collection.doc(id).update(data);
};

exports.deleteProduct = async (id) => {
  await collection.doc(id).delete();
};
