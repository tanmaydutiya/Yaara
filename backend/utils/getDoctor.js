const {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} = require("firebase/firestore");

module.exports = async (docMail) => {
  const db = getFirestore();
  const collectionRef = collection(db, "users");
  const q = query(collectionRef, where("email", "==", docMail));
  const querySnapshot = await getDocs(q);
  const results = [];
  querySnapshot.forEach((doc) => {
    results.push({
      ref: doc.ref,
    });
  });
  return results;
};
