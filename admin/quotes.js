import { db } from "../firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const publishBtn = document.getElementById("publishBtn");
const quoteText = document.getElementById("quoteText");

publishBtn.addEventListener("click", async () => {
  const quote = quoteText.value.trim();

  if (quote === "") {
    alert("Please write a quote.");
    return;
  }

  try {
    await addDoc(collection(db, "quotes"), {
      text: quote,
      createdAt: new Date()
    });

    alert("Quote Published Successfully!");
    quoteText.value = "";
  } catch (error) {
    alert(error.message);
  }
});
