const db = require("../firebase/firebase");
const collection = db.collection("orders");

exports.createOrder = async (data) => {
  const docRef = await collection.add(data);
  return docRef.id;
};

exports.getOrders = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

exports.getOrderById = async (id) => {
  const doc = await collection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

exports.updateOrder = async (id, data) => {
  await collection.doc(id).update(data);
};

exports.deleteOrder = async (id) => {
  await collection.doc(id).delete();
};
