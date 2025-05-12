const db = require("../firebase/firebase");
const collection = db.collection("users");

exports.createUser = async (data) => {
  const docRef = await collection.add(data);
  return docRef.id;
};

exports.getUsers = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

exports.getUserById = async (id) => {
  const doc = await collection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

exports.updateUser = async (id, data) => {
  await collection.doc(id).update(data);
};

exports.deleteUser = async (id) => {
  await collection.doc(id).delete();
};
