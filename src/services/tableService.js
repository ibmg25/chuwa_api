const db = require("../firebase/firebase");
const collection = db.collection("tables");

exports.createTable = async (data) => {
  const docRef = await collection.add(data);
  return docRef.id;
};

exports.getTables = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

exports.getTableById = async (id) => {
  const doc = await collection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

exports.updateTable = async (id, data) => {
  await collection.doc(id).update(data);
};

exports.deleteTable = async (id) => {
  await collection.doc(id).delete();
};
