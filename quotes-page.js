import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const quotesList = document.getElementById("quotesList");

const q = query(collection(db, "quotes"), orderBy("createdAt", "desc"));

const snapshot = await getDocs(q);

snapshot.forEach((doc) => {
  const data = doc.data();

  quotesList.innerHTML += `
    <div class="card">
      <p>${data.text}</p>
      <hr>
    </div>
  `;
});
