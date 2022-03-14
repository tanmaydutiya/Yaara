const {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} = require("firebase/firestore");

module.exports = async (username, field) => {
  const db = getFirestore();
  const collectionRef = collection(db, "appointments");
  const q = query(collectionRef, where(field, "==", username));
  const querySnapshot = await getDocs(q);
  const results = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    results.push({
      ...doc.data(),
      uid: doc.id,
    });
  });
  return results;
};
