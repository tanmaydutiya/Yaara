const {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} = require("firebase/firestore");

module.exports = async () => {
  const db = getFirestore();
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("role", "==", "doctor"));
  const querySnapshot = await getDocs(q);
  if (querySnapshot && querySnapshot.docs) {
    return querySnapshot.docs;
  }
};
