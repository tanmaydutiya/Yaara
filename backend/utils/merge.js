const firebaseConfig = require("../firebase");
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs } = require("firebase/firestore");
initializeApp(firebaseConfig);
const addData = require("./addData");

const db = getFirestore();
async function merge() {
  const querySnapshot = await getDocs(collection(db, "doctors"));
  const doctors = [];
  querySnapshot.forEach((doc) => {
    const { name, contact, location, address } = doc.data();
    doctors.push({
      name,
      phone: contact[0] ?? null,
      location,
      address,
      role: "doctor",
      email: `doctor${doc.id}@gmail.com`,
      appointments: [
        {
          label: "10 AM - 11 AM",
          isAvailable: true,
        },
        {
          label: "11 AM - 12 AM",
          isAvailable: true,
        },
        {
          label: "12 AM - 1 PM",
          isAvailable: true,
        },
        {
          label: "2 PM - 3 PM",
          isAvailable: true,
        },
        {
          label: "3 PM - 4 PM",
          isAvailable: true,
        },
        {
          label: "4 PM - 5 PM",
          isAvailable: true,
        },
        {
          label: "6 PM - 7 PM",
          isAvailable: true,
        },
        {
          label: "7 PM - 8 PM",
          isAvailable: true,
        },
      ],
    });
  });
  doctors.forEach(async (doc) => {
    const id = await addData("users", doc);
  });
}
merge();
