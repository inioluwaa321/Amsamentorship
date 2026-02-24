import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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

const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    message.style.color = "green";
    message.innerText = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);
  } catch (error) {
    message.style.color = "red";
    message.innerText = error.message;
  }
});
