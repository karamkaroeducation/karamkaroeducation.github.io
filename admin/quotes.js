import { db, storage } from "../firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";
const publishBtn = document.getElementById("publishBtn");
const quoteText = document.getElementById("quoteText");
const quoteImage = document.getElementById("quoteImage");

publishBtn.addEventListener("click", async () => {
  const quote = quoteText.value.trim();
  const imageFile = quoteImage.files[0];
let imageUrl = "";

  if (quote === "") {
    alert("Please write a quote.");
    return;
  }

  try {
    if (imageFile) {
    const storageRef = ref(storage, "quotes/" + Date.now() + "_" + imageFile.name);
    await uploadBytes(storageRef, imageFile);
    imageUrl = await getDownloadURL(storageRef);
    }
    await addDoc(collection(db, "quotes"), {
      text: quote,
imageUrl: imageUrl,
createdAt: new Date()
    });

    alert("Quote Published Successfully!");
    quoteText.value = "";
  } catch (error) {
    alert(error.message);
  }
});
