// ================================
// FIREBASE GOOGLE LOGIN
// ================================

import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyA5f68EQTk_rG27a3lmyMPpd7Z63HhTxEI",
  authDomain: "beatzo-62594.firebaseapp.com",
  projectId: "beatzo-62594",
  storageBucket: "beatzo-62594.firebasestorage.app",
  messagingSenderId: "93361207521",
  appId: "1:93361207521:web:1642b5843c29045eea5fa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// Google Login Button
document.getElementById("googleLogin").addEventListener("click", async () => {

    try {

        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        const beatzoUser = {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        };

        localStorage.setItem(
            "beatzoUser",
            JSON.stringify(beatzoUser)
        );

        localStorage.setItem("beatzoLoggedIn", "true");

        window.location.href = "index.html";

   } catch (error) {

    console.error("Firebase Error Code:", error.code);
    console.error("Firebase Error Message:", error.message);

    alert(
        "Google login failed!\n\n" +
        "Error: " + error.code +
        "\n\n" +
        error.message
    );

}

});

// =====================================================
// BEATZO LOGIN
// =====================================================

const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput =
    document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");

const loginMessage =
    document.getElementById("loginMessage");

const guestBtn =
    document.getElementById("guestBtn");


// =====================================================
// PASSWORD SHOW / HIDE
// =====================================================

togglePassword.addEventListener("click", function () {

    const icon =
        togglePassword.querySelector("i");

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        icon.classList.remove("fa-eye");

        icon.classList.add("fa-eye-slash");

    } else {

        passwordInput.type = "password";

        icon.classList.remove("fa-eye-slash");

        icon.classList.add("fa-eye");

    }

});


// =====================================================
// LOGIN
// =====================================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value.trim();


    if (!email || !password) {

        loginMessage.textContent =
            "Please enter your email and password.";

        return;
    }


    if (password.length < 6) {

        loginMessage.textContent =
            "Password must contain at least 6 characters.";

        return;
    }


    // Save demo user
    const user = {

        name:
            email
                .split("@")[0]
                .replace(/[._-]/g, " "),

        email: email

    };


    localStorage.setItem(
        "beatzoUser",
        JSON.stringify(user)
    );


    localStorage.setItem(
        "beatzoLoggedIn",
        "true"
    );


    loginMessage.textContent = "";


    // Redirect
    window.location.href =
        "index.html";

});


// =====================================================
// GUEST LOGIN
// =====================================================

guestBtn.addEventListener("click", function () {

    const guestUser = {

        name: "Beatzo Guest",

        email: "guest@beatzo.com"

    };


    localStorage.setItem(
        "beatzoUser",
        JSON.stringify(guestUser)
    );


    localStorage.setItem(
        "beatzoLoggedIn",
        "true"
    );


    window.location.href =
        "index.html";

});


// =====================================================
// FORGOT PASSWORD
// =====================================================

document
    .getElementById("forgotPassword")
    .addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "Password reset is available after connecting a backend."
        );

    });


document.getElementById("googleLogin").addEventListener("click", async () => {

    try {

        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        console.log("Google login successful:", user);

        localStorage.setItem(
            "beatzoUser",
            JSON.stringify({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        );

        localStorage.setItem("beatzoLoggedIn", "true");

        window.location.href = "index.html";

    } catch (error) {

        console.error("Firebase Error:", error);

        alert(
            "Google login failed!\n\n" +
            error.code +
            "\n\n" +
            error.message
        );

    }

});