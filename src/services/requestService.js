const db = require("../firebase/firebase");
const collection = db.collection("requests");

exports.createRequest = async (data) => {
  const docRef = await collection.add(data);
  return docRef.id;
};

exports.getRequests = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

exports.getRequestById = async (id) => {
  const doc = await collection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

exports.updateRequest = async (id, data) => {
  await collection.doc(id).update(data);
};

exports.deleteRequest = async (id) => {
  await collection.doc(id).delete();
};
