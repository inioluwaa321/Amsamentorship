import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBlwZDPWDZJ6P1cWnJZV_aIdy6MzR9EWKs",
  authDomain: "amsa-mentorship-program.firebaseapp.com",
  projectId: "amsa-mentorship-program",
  storageBucket: "amsa-mentorship-program.firebasestorage.app",
  messagingSenderId: "161964406332",
  appId: "1:161964406332:web:00618295ad3d6b9f03b539",
  measurementId: "G-JQSHGGTDRT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const form = document.getElementById("profileForm");
const message = document.getElementById("message");

let currentUser = null;

onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser = user;
  } else {
    window.location.href = "login.html";
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!currentUser) return;

  const profileData = {
  fullName: document.getElementById("fullName").value,
  matricNumber: document.getElementById("matricNumber").value,
  level: document.getElementById("level").value,
  gender: document.getElementById("gender").value,
  religion: document.getElementById("religion").value,
  hobbies: document.getElementById("hobbies").value,
  strengths: document.getElementById("strengths").value,
  weaknesses: document.getElementById("weaknesses").value,
  createdAt: new Date()
};

  try {
    await setDoc(doc(db, "users", currentUser.uid), profileData);
    message.style.color = "green";
    message.innerText = "Profile saved successfully!";
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);
  } catch (error) {
    message.style.color = "red";
    message.innerText = error.message;
  }
});
