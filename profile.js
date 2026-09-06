// ==========================================================================
// BEATZO - PROFESSIONAL PROFILE CONTROLLER
// User Data, Live Stats Sync, Exact Picture Favorites & Preference Toggles
// ==========================================================================

// Ensure session exists
let userData = null;
try {
    userData = JSON.parse(localStorage.getItem("beatzoUser"));
} catch (e) {
    userData = null;
}

if (!userData) {
    userData = {
        name: "Beatzo Listener",
        email: "listener@beatzo.com",
        memberSince: "September 2026"
    };
    localStorage.setItem("beatzoUser", JSON.stringify(userData));
}

// Elements
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const avatarLetter = document.getElementById("avatarLetter");
const memberSince = document.getElementById("memberSince");
const statLikedCount = document.getElementById("statLikedCount");
const favoritesGrid = document.getElementById("favoritesGrid");
const logoutBtn = document.getElementById("logoutBtn");
const toastContainer = document.getElementById("toastContainer");

// Modal Elements
const editModal = document.getElementById("editModal");
const editProfileBtn = document.getElementById("editProfileBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const cancelModalBtn = document.getElementById("cancelModalBtn");
const editProfileForm = document.getElementById("editProfileForm");
const editNameInput = document.getElementById("editNameInput");
const editEmailInput = document.getElementById("editEmailInput");
const shareProfileBtn = document.getElementById("shareProfileBtn");

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

// Update Profile UI
function renderUserProfile() {
    profileName.textContent = userData.name || "Beatzo Listener";
    profileEmail.textContent = userData.email || "listener@beatzo.com";
    avatarLetter.textContent = (userData.name || "B").charAt(0).toUpperCase();
    if (memberSince) {
        memberSince.textContent = userData.memberSince || "September 2026";
    }

    // Liked Songs Sync
    let liked = [];
    try {
        liked = JSON.parse(localStorage.getItem("beatzoLikedSongs")) || [];
    } catch {
        liked = [];
    }

    if (statLikedCount) {
        statLikedCount.textContent = liked.length;
    }

    renderFavoritesList(liked);
}

// Render Favorite Songs with Exact Official Pictures
function renderFavoritesList(likedList) {
    if (!favoritesGrid) return;
    favoritesGrid.innerHTML = "";

    // If user has liked songs, show them. Otherwise show 4 curated top tracks with exact official artwork!
    let displayList = likedList;
    let isShowingCurated = false;

    if (!displayList || displayList.length === 0) {
        isShowingCurated = true;
        displayList = [
            {
                title: "Naa Ready",
                artist: "Anirudh Ravichander, Thalapathy Vijay",
                movie: "Leo",
                language: "Tamil",
                cover: "https://c.saavncdn.com/386/Naa-Ready-From-Leo-Tamil-2023-20230622174435-500x500.jpg"
            },
            {
                title: "Illuminati",
                artist: "Sushin Shyam, Dabzee",
                movie: "Aavesham",
                language: "Malayalam",
                cover: "https://c.saavncdn.com/202/Aavesham-Original-Motion-Picture-Soundtrack-Malayalam-2024-20250910150630-500x500.jpg"
            },
            {
                title: "Naatu Naatu",
                artist: "M.M. Keeravani, Rahul Sipligunj",
                movie: "RRR",
                language: "Telugu",
                cover: "https://c.saavncdn.com/592/Naatu-Naatu-From-Rrr--Telugu-2021-20211110131000-500x500.jpg"
            },
            {
                title: "Kesariya",
                artist: "Arijit Singh, Pritam",
                movie: "Brahmāstra",
                language: "Hindi",
                cover: "https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg"
            }
        ];
    }

    displayList.forEach(song => {
        const card = document.createElement("div");
        card.className = "fav-card";
        card.innerHTML = `
            <div class="fav-img-wrap">
                <img src="${song.cover}" alt="${song.title}" loading="lazy" onerror="this.src='https://c.saavncdn.com/386/Naa-Ready-From-Leo-Tamil-2023-20230622174435-500x500.jpg'">
                <span class="fav-lang-badge">${song.language.toUpperCase()}</span>
                <div class="fav-play-hover">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>
            <h4>${song.title}</h4>
            <p>${song.artist} • ${song.movie || song.language}</p>
        `;

        card.addEventListener("click", () => {
            window.location.href = "index.html";
        });

        favoritesGrid.appendChild(card);
    });
}

// Edit Profile Modal
if (editProfileBtn) {
    editProfileBtn.addEventListener("click", () => {
        editNameInput.value = userData.name || "";
        editEmailInput.value = userData.email || "";
        editModal.classList.add("show");
    });
}

function closeModal() {
    editModal.classList.remove("show");
}

if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
if (cancelModalBtn) cancelModalBtn.addEventListener("click", closeModal);

if (editProfileForm) {
    editProfileForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newName = editNameInput.value.trim();
        const newEmail = editEmailInput.value.trim();

        if (newName && newEmail) {
            userData.name = newName;
            userData.email = newEmail;
            localStorage.setItem("beatzoUser", JSON.stringify(userData));
            renderUserProfile();
            closeModal();
            showToast("Profile updated successfully!", "fa-circle-check");
        }
    });
}

// Share Profile
if (shareProfileBtn) {
    shareProfileBtn.addEventListener("click", () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href);
            showToast("Profile link copied to clipboard!", "fa-link");
        } else {
            showToast("Beatzo VIP Member profile active", "fa-user");
        }
    });
}

// Preferences Toggle Handlers
["prefHiFi", "prefVinyl", "prefGlow", "prefAlerts"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener("change", () => {
            showToast("Preference saved", "fa-check");
        });
    }
});

// Logout Action
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("beatzoUser");
        localStorage.removeItem("beatzoLoggedIn");
        showToast("Signed out. Redirecting...", "fa-right-from-bracket");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 600);
    });
}

// Ambient Stardust Canvas
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

// Initial render
renderUserProfile();
