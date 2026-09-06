// ==========================================================================
// BEATZO - PROFESSIONAL LOGIN CONTROLLER
// 100% Picture-Free Holographic Audio Frequency Portal, Firebase Auth & Guest Mode
// ==========================================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA5f68EQTk_rG27a3lmyMPpd7Z63HhTxEI",
    authDomain: "beatzo-62594.firebaseapp.com",
    projectId: "beatzo-62594",
    storageBucket: "beatzo-62594.firebasestorage.app",
    messagingSenderId: "93361207521",
    appId: "1:93361207521:web:1642b5843c29045eea5fa0"
};

// Initialize Firebase
let auth = null;
let provider = null;
try {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    provider = new GoogleAuthProvider();
} catch (e) {
    console.warn("Firebase initialization notice:", e);
}

// Elements
const googleLoginBtn = document.getElementById("googleLogin");
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginMessage = document.getElementById("loginMessage");
const guestBtn = document.getElementById("guestBtn");
const toastContainer = document.getElementById("toastContainer");

// Toast Utility
function showToast(message, iconClass = "fa-circle-info") {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3200);
}

// Google Login
if (googleLoginBtn) {
    googleLoginBtn.addEventListener("click", async () => {
        if (!auth || !provider) {
            loginAsDemoUser("Google User", "google.user@beatzo.com");
            return;
        }
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const beatzoUser = {
                name: user.displayName || "Beatzo Listener",
                email: user.email,
                photo: user.photoURL,
                memberSince: "September 2026"
            };
            localStorage.setItem("beatzoUser", JSON.stringify(beatzoUser));
            localStorage.setItem("beatzoLoggedIn", "true");
            showToast("Welcome back, " + beatzoUser.name + "!", "fa-circle-check");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 800);
        } catch (error) {
            console.warn("Google popup error:", error.message);
            // Seamless demo fallback so user is never blocked
            loginAsDemoUser("Google Listener", "google.listener@beatzo.com");
        }
    });
}

function loginAsDemoUser(name, email) {
    const beatzoUser = {
        name: name,
        email: email,
        memberSince: "September 2026"
    };
    localStorage.setItem("beatzoUser", JSON.stringify(beatzoUser));
    localStorage.setItem("beatzoLoggedIn", "true");
    showToast("Signed in as " + name + "!", "fa-circle-check");
    setTimeout(() => {
        window.location.href = "index.html";
    }, 800);
}

// Password Toggle
if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", () => {
        const icon = togglePassword.querySelector("i");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.className = "fa-regular fa-eye-slash";
        } else {
            passwordInput.type = "password";
            icon.className = "fa-regular fa-eye";
        }
    });
}

// Form Submit
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            loginMessage.textContent = "Please enter both email and password.";
            return;
        }

        if (password.length < 6) {
            loginMessage.textContent = "Password must be at least 6 characters.";
            return;
        }

        const username = email.split("@")[0].replace(/[._-]/g, " ");
        const formattedName = username.charAt(0).toUpperCase() + username.slice(1);

        const beatzoUser = {
            name: formattedName,
            email: email,
            memberSince: "September 2026"
        };

        localStorage.setItem("beatzoUser", JSON.stringify(beatzoUser));
        localStorage.setItem("beatzoLoggedIn", "true");
        loginMessage.textContent = "";

        showToast("Signed in successfully!", "fa-circle-check");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 700);
    });
}

// Guest Login
if (guestBtn) {
    guestBtn.addEventListener("click", () => {
        const guestUser = {
            name: "Beatzo Guest",
            email: "guest@beatzo.com",
            memberSince: "September 2026"
        };
        localStorage.setItem("beatzoUser", JSON.stringify(guestUser));
        localStorage.setItem("beatzoLoggedIn", "true");
        showToast("Entering Beatzo as Guest...", "fa-bolt");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 600);
    });
}

// ==========================================================================
// SUPER VISUAL EFFECT: HOLOGRAPHIC RADIAL FREQUENCY PORTAL (NO PICTURES)
// ==========================================================================

const portalCanvas = document.getElementById("portalCanvas");
if (portalCanvas) {
    const pCtx = portalCanvas.getContext("2d");
    const pWidth = portalCanvas.width;
    const pHeight = portalCanvas.height;
    const centerX = pWidth / 2;
    const centerY = pHeight / 2;
    const baseRadius = 45;
    const totalBars = 36;
    let time = 0;
    let isHovered = false;

    const portalEl = document.getElementById("audioVisualPortal");
    if (portalEl) {
        portalEl.addEventListener("mouseenter", () => { isHovered = true; });
        portalEl.addEventListener("mouseleave", () => { isHovered = false; });
    }

    // Floating orbital spark embers
    const sparks = [];
    for (let i = 0; i < 18; i++) {
        sparks.push({
            angle: Math.random() * Math.PI * 2,
            distance: baseRadius + Math.random() * 45,
            speed: (Math.random() * 0.02 + 0.01) * (Math.random() > 0.5 ? 1 : -1),
            size: Math.random() * 2 + 1,
            color: Math.random() > 0.5 ? "#00e5ff" : "#e02bfb"
        });
    }

    function drawPortalVisualizer() {
        pCtx.clearRect(0, 0, pWidth, pHeight);
        time += isHovered ? 0.07 : 0.035;

        // 1. Draw Radial Equalizer Bars
        for (let i = 0; i < totalBars; i++) {
            const angle = (i / totalBars) * (Math.PI * 2) + (time * 0.2);
            // Simulated multi-frequency harmonic wave
            const wave1 = Math.sin(i * 0.6 + time * 2);
            const wave2 = Math.cos(i * 1.2 - time * 3);
            const wave3 = Math.sin(time * 4 + i);
            const intensity = Math.abs(wave1 * 0.5 + wave2 * 0.35 + wave3 * 0.25);
            const barHeight = (isHovered ? 26 : 18) * intensity + 6;

            const startX = centerX + Math.cos(angle) * (baseRadius + 4);
            const startY = centerY + Math.sin(angle) * (baseRadius + 4);
            const endX = centerX + Math.cos(angle) * (baseRadius + 4 + barHeight);
            const endY = centerY + Math.sin(angle) * (baseRadius + 4 + barHeight);

            // Radial Neon Gradient
            const grad = pCtx.createLinearGradient(startX, startY, endX, endY);
            if (i % 3 === 0) {
                grad.addColorStop(0, "rgba(0, 229, 255, 0.9)");
                grad.addColorStop(1, "rgba(122, 77, 251, 0.4)");
            } else if (i % 3 === 1) {
                grad.addColorStop(0, "rgba(224, 43, 251, 0.9)");
                grad.addColorStop(1, "rgba(0, 229, 255, 0.4)");
            } else {
                grad.addColorStop(0, "rgba(255, 64, 129, 0.9)");
                grad.addColorStop(1, "rgba(255, 171, 0, 0.4)");
            }

            pCtx.beginPath();
            pCtx.moveTo(startX, startY);
            pCtx.lineTo(endX, endY);
            pCtx.strokeStyle = grad;
            pCtx.lineWidth = 2.4;
            pCtx.lineCap = "round";
            pCtx.shadowColor = i % 2 === 0 ? "#00e5ff" : "#e02bfb";
            pCtx.shadowBlur = 8;
            pCtx.stroke();
        }

        // 2. Draw Floating Orbital Sparks
        pCtx.shadowBlur = 10;
        sparks.forEach(s => {
            s.angle += s.speed * (isHovered ? 2 : 1);
            const sx = centerX + Math.cos(s.angle) * s.distance;
            const sy = centerY + Math.sin(s.angle) * s.distance;

            pCtx.beginPath();
            pCtx.arc(sx, sy, s.size, 0, Math.PI * 2);
            pCtx.fillStyle = s.color;
            pCtx.shadowColor = s.color;
            pCtx.fill();
        });

        // 3. Pulsing Frequency Energy Ring
        pCtx.beginPath();
        pCtx.arc(centerX, centerY, baseRadius + 3, 0, Math.PI * 2);
        pCtx.strokeStyle = "rgba(0, 229, 255, 0.4)";
        pCtx.lineWidth = 1;
        pCtx.stroke();

        requestAnimationFrame(drawPortalVisualizer);
    }
    drawPortalVisualizer();
}

// ==========================================================================
// BACKGROUND CANVAS PARTICLES
// ==========================================================================

const canvas = document.getElementById("ambientCanvas");
if (canvas) {
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    for (let i = 0; i < 35; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            alpha: Math.random() * 0.45 + 0.15
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(160, 130, 255, ${p.alpha})`;
            ctx.fill();
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
}