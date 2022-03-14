const {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} = require("firebase/firestore");

module.exports = async (aptDate) => {
  const db = getFirestore();
  const aptRef = collection(db, "appointments");
  const q = query(aptRef, where("appointmentDate", "==", aptDate));
  const querySnapshot = await getDocs(q);
  const apt = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    apt.push({
      ...doc.data(),
    });
  });
  return apt;
};
