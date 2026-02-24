import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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

const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (password.length < 6) {
    message.style.color = "red";
    message.innerText = "Password must be at least 6 characters.";
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    message.style.color = "green";
    message.innerText = "Account created successfully!";
    form.reset();
  } catch (error) {
    message.style.color = "red";
    message.innerText = error.message;
  }
});
