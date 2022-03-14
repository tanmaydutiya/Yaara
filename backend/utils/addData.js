const { getFirestore, collection, addDoc } = require("firebase/firestore");

const db = getFirestore();

module.exports = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return -1;
  }
};
