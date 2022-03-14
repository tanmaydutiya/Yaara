const {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} = require("firebase/firestore");

module.exports = async (email) => {
  const db = getFirestore();
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const users = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    users.push({
      uid: doc.id,
      userInfo: doc.data(),
    });
  });
  return users[0];
};
