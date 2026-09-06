// ==========================================================================
// BEATZO MUSIC STREAMING ENGINE & VISUAL EFFECTS
// Professional Multi-Lingual Architecture (Tamil, Malayalam, Telugu, Kannada, Hindi, English)
// ==========================================================================

// Ensure session exists so direct visits to index.html immediately work seamlessly
if (localStorage.getItem("beatzoLoggedIn") !== "true") {
    localStorage.setItem("beatzoLoggedIn", "true");
    if (!localStorage.getItem("beatzoUser")) {
        localStorage.setItem("beatzoUser", JSON.stringify({
            name: "Beatzo Listener",
            email: "listener@beatzo.com"
        }));
    }
}

// ==========================================================================
// COMPREHENSIVE 6-LANGUAGE SONG CATALOG WITH HIGH-RES PICTURES
// ==========================================================================

const songs = [
    // ------------------- TAMIL -------------------
    {
        id: "tamil-1",
        title: "Naa Ready",
        artist: "Anirudh Ravichander, Thalapathy Vijay",
        movie: "Leo",
        language: "Tamil",
        duration: "4:08",
        durationSec: 248,
        cover: "https://c.saavncdn.com/386/Naa-Ready-From-Leo-Tamil-2023-20230622174435-500x500.jpg",
        color: "#ff3d00",
        src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=electronic-future-beats-117997.mp3"
    },
    {
        id: "tamil-2",
        title: "Hukum (Thalaivar Alappara)",
        artist: "Anirudh Ravichander, Super Subu",
        movie: "Jailer",
        language: "Tamil",
        duration: "3:27",
        durationSec: 207,
        cover: "https://c.saavncdn.com/959/Hukum-Thalaivar-Alappara-From-Jailer-Tamil-2023-20230717071502-500x500.jpg",
        color: "#ff9100",
        src: "https://cdn.pixabay.com/download/audio/2022/10/14/audio_9939f792cb.mp3?filename=tomp3cc-epic-cinematic-trailer-125027.mp3"
    },
    {
        id: "tamil-3",
        title: "Arabic Kuthu (Halamithi Habibo)",
        artist: "Anirudh Ravichander, Jonita Gandhi",
        movie: "Beast",
        language: "Tamil",
        duration: "4:39",
        durationSec: 279,
        cover: "https://c.saavncdn.com/629/Arabic-Kuthu-Halamithi-Habibo-From-Beast--Tamil-2022-20220223183836-500x500.jpg",
        color: "#ff1744",
        src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=summer-party-109289.mp3"
    },
    {
        id: "tamil-4",
        title: "Kaadhal Sadugudu",
        artist: "A.R. Rahman, S.P. Charan",
        movie: "Alaipayuthey",
        language: "Tamil",
        duration: "4:35",
        durationSec: 275,
        cover: "https://c.saavncdn.com/517/Alaipayuthey-Tamil-2000-500x500.jpg",
        color: "#7c4dff",
        src: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=lofi-study-112191.mp3"
    },

    // ----------------- MALAYALAM -----------------
    {
        id: "mal-1",
        title: "Illuminati",
        artist: "Sushin Shyam, Dabzee",
        movie: "Aavesham",
        language: "Malayalam",
        duration: "3:12",
        durationSec: 192,
        cover: "https://c.saavncdn.com/202/Aavesham-Original-Motion-Picture-Soundtrack-Malayalam-2024-20250910150630-500x500.jpg",
        color: "#00e676",
        src: "https://cdn.pixabay.com/download/audio/2022/11/06/audio_03d61184ff.mp3?filename=groovy-ambient-funk-201745.mp3"
    },
    {
        id: "mal-2",
        title: "Darshana",
        artist: "Hesham Abdul Wahab, Darshana Rajendran",
        movie: "Hridayam",
        language: "Malayalam",
        duration: "3:44",
        durationSec: 224,
        cover: "https://c.saavncdn.com/869/Hridayam-Side-A-Original-Motion-Picture-Soundtrack-Malayalam-2022-20250910150631-500x500.jpg",
        color: "#ffab00",
        src: "https://cdn.pixabay.com/download/audio/2021/08/04/audio_bb630cc098.mp3?filename=warm-acoustic-guitar-melody-8051.mp3"
    },
    {
        id: "mal-3",
        title: "Aadharanjali",
        artist: "Sushin Shyam, Madhuwanti Narayan",
        movie: "Romancham",
        language: "Malayalam",
        duration: "3:02",
        durationSec: 182,
        cover: "https://c.saavncdn.com/354/Aadharanjali-From-Romancham-Malayalam-2022-20220930093951-500x500.jpg",
        color: "#651fff",
        src: "https://cdn.pixabay.com/download/audio/2022/01/26/audio_d0c6ff1101.mp3?filename=beat-electronic-trap-113337.mp3"
    },
    {
        id: "mal-4",
        title: "Malare Ninne",
        artist: "Rajesh Murugesan, Vijay Yesudas",
        movie: "Premam",
        language: "Malayalam",
        duration: "5:15",
        durationSec: 315,
        cover: "https://c.saavncdn.com/665/Premam-Malayalam-2015-500x500.jpg",
        color: "#00b0ff",
        src: "https://cdn.pixabay.com/download/audio/2021/09/06/audio_82c5896a60.mp3?filename=gentle-acoustic-guitar-relaxing-12002.mp3"
    },

    // ------------------ TELUGU ------------------
    {
        id: "tel-1",
        title: "Naatu Naatu",
        artist: "M.M. Keeravani, Rahul Sipligunj, Kaala Bhairava",
        movie: "RRR",
        language: "Telugu",
        duration: "3:34",
        durationSec: 214,
        cover: "https://c.saavncdn.com/592/Naatu-Naatu-From-Rrr--Telugu-2021-20211110131000-500x500.jpg",
        color: "#ff6d00",
        src: "https://cdn.pixabay.com/download/audio/2022/03/10/audio_c3e660e5cb.mp3?filename=energy-sport-rock-trailer-109038.mp3"
    },
    {
        id: "tel-2",
        title: "Samajavaragamana",
        artist: "Thaman S, Sid Sriram",
        movie: "Ala Vaikunthapurramuloo",
        language: "Telugu",
        duration: "4:34",
        durationSec: 274,
        cover: "https://c.saavncdn.com/517/Ala-Vaikunthapurramuloo-Telugu-2019-20200116144338-500x500.jpg",
        color: "#ffd600",
        src: "https://cdn.pixabay.com/download/audio/2022/02/07/audio_472bfa4086.mp3?filename=acoustic-guitars-ambient-melody-113524.mp3"
    },
    {
        id: "tel-3",
        title: "Oo Antava Mava",
        artist: "Devi Sri Prasad, Indravathi Chauhan",
        movie: "Pushpa: The Rise",
        language: "Telugu",
        duration: "3:43",
        durationSec: 223,
        cover: "https://c.saavncdn.com/blob/056/Pushpa-The-Rise-Telugu-2021-20211216115409-500x500.jpg",
        color: "#d500f9",
        src: "https://cdn.pixabay.com/download/audio/2022/03/24/audio_34b35e07a3.mp3?filename=stylish-deep-electronic-110052.mp3"
    },
    {
        id: "tel-4",
        title: "Butta Bomma",
        artist: "Thaman S, Armaan Malik",
        movie: "Ala Vaikunthapurramuloo",
        language: "Telugu",
        duration: "3:17",
        durationSec: 197,
        cover: "https://c.saavncdn.com/517/Ala-Vaikunthapurramuloo-Telugu-2019-20200116144338-500x500.jpg",
        color: "#00e5ff",
        src: "https://cdn.pixabay.com/download/audio/2022/05/16/audio_db6591201e.mp3?filename=happy-pop-ukulele-115317.mp3"
    },

    // ------------------ KANNADA ------------------
    {
        id: "kan-1",
        title: "Singara Siriye",
        artist: "B. Ajaneesh Loknath, Vijay Prakash, Ananya Bhat",
        movie: "Kantara",
        language: "Kannada",
        duration: "4:42",
        durationSec: 282,
        cover: "https://c.saavncdn.com/999/Singara-Siriye-From-Kantara-Kannada-2022-20250307133657-500x500.jpg",
        color: "#00c853",
        src: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_c3e660e5cb.mp3?filename=flute-ambient-nature-harmony-112190.mp3"
    },
    {
        id: "kan-2",
        title: "Ra Ra Rakkamma",
        artist: "B. Ajaneesh Loknath, Nakash Aziz, Sunidhi Chauhan",
        movie: "Vikrant Rona",
        language: "Kannada",
        duration: "3:48",
        durationSec: 228,
        cover: "https://c.saavncdn.com/154/Ra-Ra-Rakkamma-From-Vikrant-Rona-Hindi-2022-20220524051001-500x500.jpg",
        color: "#ff3d00",
        src: "https://cdn.pixabay.com/download/audio/2022/04/27/audio_404847d0d0.mp3?filename=electronic-party-dance-116284.mp3"
    },
    {
        id: "kan-3",
        title: "Salaam Rocky Bhai",
        artist: "Ravi Basrur, Vijay Prakash, Santhosh Venky",
        movie: "K.G.F: Chapter 1",
        language: "Kannada",
        duration: "4:05",
        durationSec: 245,
        cover: "https://c.saavncdn.com/372/KGF-Chapter-1-Kannada-Kannada-2018-20220827063717-500x500.jpg",
        color: "#ffab00",
        src: "https://cdn.pixabay.com/download/audio/2022/10/18/audio_31da294c65.mp3?filename=cinematic-brass-drums-action-125867.mp3"
    },
    {
        id: "kan-4",
        title: "Belakina Kavithe",
        artist: "B. Ajaneesh Loknath, Sanjith Hegde, Sangeetha",
        movie: "Banaras",
        language: "Kannada",
        duration: "3:58",
        durationSec: 238,
        cover: "https://c.saavncdn.com/207/Banaras-Kannada-2022-20251012070334-500x500.jpg",
        color: "#00b0ff",
        src: "https://cdn.pixabay.com/download/audio/2021/11/24/audio_3cb7c7793d.mp3?filename=ambient-piano-strings-10711.mp3"
    },

    // ------------------- HINDI -------------------
    {
        id: "hin-1",
        title: "Kesariya",
        artist: "Arijit Singh, Pritam, Amitabh Bhattacharya",
        movie: "Brahmāstra",
        language: "Hindi",
        duration: "4:28",
        durationSec: 268,
        cover: "https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg",
        color: "#ff9100",
        src: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=lofi-romantic-guitar-112191.mp3"
    },
    {
        id: "hin-2",
        title: "Chaleya",
        artist: "Arijit Singh, Shilpa Rao, Anirudh Ravichander",
        movie: "Jawan",
        language: "Hindi",
        duration: "3:20",
        durationSec: 200,
        cover: "https://c.saavncdn.com/026/Chaleya-From-Jawan-Hindi-2023-20230814014337-500x500.jpg",
        color: "#ff4081",
        src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=breezy-future-pop-117997.mp3"
    },
    {
        id: "hin-3",
        title: "Apna Bana Le",
        artist: "Arijit Singh, Sachin-Jigar",
        movie: "Bhediya",
        language: "Hindi",
        duration: "4:21",
        durationSec: 261,
        cover: "https://c.saavncdn.com/815/Bhediya-Hindi-2023-20230927155213-500x500.jpg",
        color: "#2979ff",
        src: "https://cdn.pixabay.com/download/audio/2021/09/06/audio_82c5896a60.mp3?filename=gentle-acoustic-guitar-relaxing-12002.mp3"
    },
    {
        id: "hin-4",
        title: "Tum Hi Ho",
        artist: "Arijit Singh, Mithoon",
        movie: "Aashiqui 2",
        language: "Hindi",
        duration: "4:22",
        durationSec: 262,
        cover: "https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg",
        color: "#651fff",
        src: "https://cdn.pixabay.com/download/audio/2021/11/24/audio_3cb7c7793d.mp3?filename=emotional-piano-strings-10711.mp3"
    },

    // ------------------ ENGLISH ------------------
    {
        id: "eng-1",
        title: "Blinding Lights",
        artist: "The Weeknd",
        movie: "After Hours",
        language: "English",
        duration: "3:20",
        durationSec: 200,
        cover: "https://c.saavncdn.com/167/Blinding-Lights-English-2019-20191128231033-500x500.jpg",
        color: "#ff1744",
        src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=80s-retro-synthwave-109289.mp3"
    },
    {
        id: "eng-2",
        title: "Shape of You",
        artist: "Ed Sheeran",
        movie: "÷ (Divide)",
        language: "English",
        duration: "3:53",
        durationSec: 233,
        cover: "https://c.saavncdn.com/126/Shape-of-You-English-2017-500x500.jpg",
        color: "#00e5ff",
        src: "https://cdn.pixabay.com/download/audio/2022/05/16/audio_db6591201e.mp3?filename=pop-rhythm-marimba-115317.mp3"
    },
    {
        id: "eng-3",
        title: "Starboy",
        artist: "The Weeknd ft. Daft Punk",
        movie: "Starboy",
        language: "English",
        duration: "3:50",
        durationSec: 230,
        cover: "https://c.saavncdn.com/372/Starboy-English-2016-500x500.jpg",
        color: "#d500f9",
        src: "https://cdn.pixabay.com/download/audio/2022/03/24/audio_34b35e07a3.mp3?filename=electronic-synth-bass-110052.mp3"
    },
    {
        id: "eng-4",
        title: "As It Was",
        artist: "Harry Styles",
        movie: "Harry's House",
        language: "English",
        duration: "2:47",
        durationSec: 167,
        cover: "https://upload.wikimedia.org/wikipedia/en/0/02/Harry_Styles_-_As_It_Was.png",
        color: "#ff4081",
        src: "https://cdn.pixabay.com/download/audio/2022/11/06/audio_03d61184ff.mp3?filename=bright-indie-pop-groove-201745.mp3"
    }
];

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let isMuted = false;
let currentVolume = 0.8;
let activeLanguageFilter = "all";

// Real HTML5 Audio Object
const audio = new Audio();
audio.volume = currentVolume;
audio.preload = "auto";

// Procedural Web Audio Synthesizer Fallback (Guarantees Sound in offline/CORS mode)
let audioCtx = null;
let synthInterval = null;
let isUsingSynth = false;

function initWebAudioSynth() {
    if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
            audioCtx = new AudioContext();
        }
    }
}

function playSynthNotes(song) {
    if (!audioCtx) return;
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }
    stopSynthNotes();
    isUsingSynth = true;

    // Musical chords based on language aesthetic
    const scales = {
        Tamil: [220, 277.18, 329.63, 440],
        Malayalam: [261.63, 329.63, 392.00, 523.25],
        Telugu: [293.66, 369.99, 440.00, 587.33],
        Kannada: [246.94, 311.13, 369.99, 493.88],
        Hindi: [277.18, 349.23, 415.30, 554.37],
        English: [261.63, 293.66, 329.63, 392.00]
    };
    const notes = scales[song.language] || [261.63, 329.63, 392.00];

    let noteIdx = 0;
    synthInterval = setInterval(() => {
        if (!isPlaying) return;
        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(notes[noteIdx % notes.length], audioCtx.currentTime);
            gain.gain.setValueAtTime(0.08 * (isMuted ? 0 : currentVolume), audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.45);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.5);
            noteIdx++;
        } catch (err) {
            // silent catch
        }
    }, 450);
}

function stopSynthNotes() {
    if (synthInterval) {
        clearInterval(synthInterval);
        synthInterval = null;
    }
    isUsingSynth = false;
}

// ==========================================================================
// DOM ELEMENTS
// ==========================================================================

const songListEl = document.getElementById("songList");
const noResultsEl = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const resetSearchBtn = document.getElementById("resetSearchBtn");
const songCountPill = document.getElementById("songCountPill");
const songsSectionTitle = document.getElementById("songsSectionTitle");

// Hero Elements
const heroVinyl = document.getElementById("heroVinyl");
const heroDiscImg = document.getElementById("heroDiscImg");
const tonearm = document.getElementById("tonearm");
const heroEqualizer = document.getElementById("heroEqualizer");
const exploreBtn = document.getElementById("exploreBtn");
const heroRandomBtn = document.getElementById("heroRandomBtn");

// Player Elements
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const repeatBtn = document.getElementById("repeatBtn");
const likeBtn = document.getElementById("likeBtn");
const muteBtn = document.getElementById("muteBtn");
const volumeIcon = document.getElementById("volumeIcon");
const progress = document.getElementById("progress");
const progressFill = document.getElementById("progressFill");
const volume = document.getElementById("volume");
const volumeFill = document.getElementById("volumeFill");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const currentTitle = document.getElementById("currentTitle");
const currentArtist = document.getElementById("currentArtist");
const playerAlbumArt = document.getElementById("playerAlbumArt");
const playerLangBadge = document.getElementById("playerLangBadge");
const playerMiniVisualizer = document.getElementById("playerMiniVisualizer");
const headerWaveBadge = document.getElementById("headerWaveBadge");

// Navigation & Sections
const homeLink = document.getElementById("homeLink");
const searchLink = document.getElementById("searchLink");
const libraryLink = document.getElementById("libraryLink");
const likedLink = document.getElementById("likedLink");
const recentLink = document.getElementById("recentLink");
const playlistLink = document.getElementById("playlistLink");
const likedCountBadge = document.getElementById("likedCount");

const dynamicSection = document.getElementById("dynamicSection");
const dynamicTitle = document.getElementById("dynamicTitle");
const dynamicContent = document.getElementById("dynamicContent");
const closeDynamic = document.getElementById("closeDynamic");

const mobileMenu = document.getElementById("mobileMenu");
const sidebar = document.querySelector(".sidebar");
const toastContainer = document.getElementById("toastContainer");

// Glow Elements
const glow1 = document.getElementById("glow1");
const glow2 = document.getElementById("glow2");
const glow3 = document.getElementById("glow3");

// ==========================================================================
// RENDER ALL SONGS DYNAMICALLY
// ==========================================================================

function renderSongCards(list = songs) {
    songListEl.innerHTML = "";

    if (list.length === 0) {
        songListEl.style.display = "none";
        noResultsEl.style.display = "block";
        songCountPill.textContent = "0 Songs Found";
        return;
    }

    songListEl.style.display = "grid";
    noResultsEl.style.display = "none";
    songCountPill.textContent = `Showing ${list.length} Songs`;

    const likedSongs = getLikedSongs();

    list.forEach(song => {
        const globalIndex = songs.findIndex(s => s.id === song.id);
        const isLiked = likedSongs.some(item => item.id === song.id || item.title === song.title);
        const isCurrentActive = isPlaying && globalIndex === currentSongIndex;

        const card = document.createElement("div");
        card.className = `song-card ${isCurrentActive ? "active-playing" : ""}`;
        card.dataset.index = globalIndex;
        card.dataset.title = song.title;
        card.dataset.artist = song.artist;
        card.dataset.language = song.language;

        card.innerHTML = `
            <div class="card-artwork-wrap">
                <img src="${song.cover}" alt="${song.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80'">
                <span class="card-lang-badge">${song.language.toUpperCase()}</span>
                <span class="card-duration-badge">${song.duration}</span>
                
                <div class="card-playing-wave">
                    <span></span><span></span><span></span>
                </div>

                <button class="card-play-btn" title="Play ${song.title}">
                    <i class="fa-solid ${isCurrentActive ? "fa-pause" : "fa-play"}"></i>
                </button>
            </div>

            <div class="song-card-info">
                <div class="song-card-title-row">
                    <h3 title="${song.title}">${song.title}</h3>
                    <button class="card-heart-btn ${isLiked ? "liked" : ""}" title="Favorite">
                        <i class="fa-${isLiked ? "solid" : "regular"} fa-heart"></i>
                    </button>
                </div>
                <p title="${song.artist} • ${song.movie}">${song.artist}</p>
            </div>
        `;

        // Card Click -> Play
        card.addEventListener("click", () => {
            if (currentSongIndex === globalIndex && isPlaying) {
                pauseSong();
            } else {
                loadSong(globalIndex);
                playSong();
            }
        });

        // Play Button Click
        const cardPlayBtn = card.querySelector(".card-play-btn");
        cardPlayBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (currentSongIndex === globalIndex && isPlaying) {
                pauseSong();
            } else {
                loadSong(globalIndex);
                playSong();
            }
        });

        // Heart Button Click
        const heartBtn = card.querySelector(".card-heart-btn");
        heartBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleLikeSong(song);
            renderSongCards(getActiveFilteredSongs());
        });

        songListEl.appendChild(card);
    });
}

function getActiveFilteredSongs() {
    let filtered = songs;
    if (activeLanguageFilter !== "all") {
        filtered = filtered.filter(s => s.language.toLowerCase() === activeLanguageFilter.toLowerCase());
    }
    const query = searchInput.value.toLowerCase().trim();
    if (query) {
        filtered = filtered.filter(s =>
            s.title.toLowerCase().includes(query) ||
            s.artist.toLowerCase().includes(query) ||
            s.movie.toLowerCase().includes(query) ||
            s.language.toLowerCase().includes(query)
        );
    }
    return filtered;
}

// ==========================================================================
// AUDIO PLAYBACK ENGINE (HTML5 + Web Audio Fallback)
// ==========================================================================

function loadSong(index) {
    if (index < 0) index = songs.length - 1;
    if (index >= songs.length) index = 0;

    currentSongIndex = index;
    const song = songs[index];

    currentTitle.textContent = song.title;
    currentArtist.textContent = `${song.artist} • ${song.movie}`;
    playerLangBadge.textContent = song.language.toUpperCase();
    playerAlbumArt.src = song.cover;
    heroDiscImg.src = song.cover;
    durationEl.textContent = song.duration;
    currentTimeEl.textContent = "0:00";
    progress.value = 0;
    progressFill.style.width = "0%";

    // Stop synth if it was running
    stopSynthNotes();

    // Set real audio source
    audio.src = song.src;
    audio.currentTime = 0;

    // Apply song's dominant theme glow
    updateDynamicAmbientGlow(song.color);

    // Update Favorite Icon
    updateLikeButton();

    // Save to recently played
    saveRecentlyPlayed(song);

    // Highlight active card
    updateSongCardActiveStates();
}

function playSong() {
    initWebAudioSynth();
    isPlaying = true;

    audio.play().then(() => {
        isUsingSynth = false;
    }).catch(err => {
        console.warn("Audio play notice (activating melodic synth fallback):", err.message);
        // Seamless procedural synth ensures music experience always works
        playSynthNotes(songs[currentSongIndex]);
    });

    // Update Player UI
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    playBtn.classList.add("playing");

    // Visuals
    heroVinyl.classList.add("spinning");
    tonearm.classList.add("playing");
    heroEqualizer.classList.add("playing");
    playerMiniVisualizer.classList.add("playing");
    headerWaveBadge.classList.add("playing");

    updateSongCardActiveStates();
    showToast(`Playing: ${songs[currentSongIndex].title}`, "fa-circle-play");
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    stopSynthNotes();

    // Update Player UI
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    playBtn.classList.remove("playing");

    // Visuals
    heroVinyl.classList.remove("spinning");
    tonearm.classList.remove("playing");
    heroEqualizer.classList.remove("playing");
    playerMiniVisualizer.classList.remove("playing");
    headerWaveBadge.classList.remove("playing");

    updateSongCardActiveStates();
}

function togglePlayPause() {
    if (currentTitle.textContent === "Select a song") {
        loadSong(0);
        playSong();
        return;
    }
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function playNextSong() {
    if (isShuffle) {
        let rand;
        do {
            rand = Math.floor(Math.random() * songs.length);
        } while (rand === currentSongIndex && songs.length > 1);
        currentSongIndex = rand;
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(currentSongIndex);
    playSong();
}

function playPrevSong() {
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
        return;
    }
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

// Sync Audio Time & Progress
audio.addEventListener("timeupdate", () => {
    if (!isPlaying) return;
    const current = audio.currentTime;
    const total = audio.duration || songs[currentSongIndex].durationSec || 200;
    const percent = (current / total) * 100;

    progress.value = percent;
    progressFill.style.width = `${percent}%`;
    currentTimeEl.textContent = formatTime(current);

    if (audio.duration) {
        durationEl.textContent = formatTime(audio.duration);
    }
});

// Fallback timer when synth is active
setInterval(() => {
    if (isPlaying && isUsingSynth) {
        let val = Number(progress.value) + 0.5;
        if (val > 100) val = 0;
        progress.value = val;
        progressFill.style.width = `${val}%`;
        const currentSec = (val / 100) * songs[currentSongIndex].durationSec;
        currentTimeEl.textContent = formatTime(currentSec);
    }
}, 500);

audio.addEventListener("ended", () => {
    if (isRepeat) {
        audio.currentTime = 0;
        playSong();
    } else {
        playNextSong();
    }
});

// Scrubbing
progress.addEventListener("input", () => {
    const val = Number(progress.value);
    progressFill.style.width = `${val}%`;
    const total = audio.duration || songs[currentSongIndex].durationSec || 200;
    const seekTime = (val / 100) * total;
    audio.currentTime = seekTime;
    currentTimeEl.textContent = formatTime(seekTime);
});

// Volume
volume.addEventListener("input", () => {
    const val = Number(volume.value);
    volumeFill.style.width = `${val}%`;
    currentVolume = val / 100;
    audio.volume = currentVolume;
    isMuted = currentVolume === 0;
    updateVolumeIcon();
});

muteBtn.addEventListener("click", () => {
    isMuted = !isMuted;
    if (isMuted) {
        audio.volume = 0;
        volume.value = 0;
        volumeFill.style.width = "0%";
    } else {
        audio.volume = currentVolume || 0.8;
        volume.value = (currentVolume || 0.8) * 100;
        volumeFill.style.width = `${volume.value}%`;
    }
    updateVolumeIcon();
});

function updateVolumeIcon() {
    if (isMuted || audio.volume === 0) {
        volumeIcon.className = "fa-solid fa-volume-xmark";
    } else if (audio.volume < 0.5) {
        volumeIcon.className = "fa-solid fa-volume-low";
    } else {
        volumeIcon.className = "fa-solid fa-volume-high";
    }
}

// Shuffle & Repeat
shuffleBtn.addEventListener("click", () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle("active", isShuffle);
    showToast(isShuffle ? "Shuffle Mode ON" : "Shuffle Mode OFF", "fa-shuffle");
});

repeatBtn.addEventListener("click", () => {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle("active", isRepeat);
    showToast(isRepeat ? "Repeat Track ON" : "Repeat Track OFF", "fa-repeat");
});

playBtn.addEventListener("click", togglePlayPause);
nextBtn.addEventListener("click", playNextSong);
prevBtn.addEventListener("click", playPrevSong);

// ==========================================================================
// CARD ACTIVE STATE SYNC
// ==========================================================================

function updateSongCardActiveStates() {
    document.querySelectorAll(".song-card").forEach(card => {
        const idx = Number(card.dataset.index);
        const playIcon = card.querySelector(".card-play-btn i");
        if (idx === currentSongIndex && isPlaying) {
            card.classList.add("active-playing");
            if (playIcon) playIcon.className = "fa-solid fa-pause";
        } else {
            card.classList.remove("active-playing");
            if (playIcon) playIcon.className = "fa-solid fa-play";
        }
    });
}

// ==========================================================================
// DYNAMIC AMBIENT GLOW EFFECTS
// ==========================================================================

function updateDynamicAmbientGlow(colorHex) {
    if (!glow1 || !glow2) return;
    glow1.style.background = `radial-gradient(circle, ${colorHex}35 0%, transparent 70%)`;
    glow2.style.background = `radial-gradient(circle, ${colorHex}25 0%, transparent 70%)`;
}

// ==========================================================================
// BACKGROUND CANVAS PARTICLES (VISUAL EFFECT)
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
    for (let i = 0; i < 45; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            alpha: Math.random() * 0.5 + 0.2
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        const speedBoost = isPlaying ? 1.6 : 0.8;

        particles.forEach(p => {
            p.x += p.vx * speedBoost;
            p.y += p.vy * speedBoost;

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

// ==========================================================================
// LANGUAGE FILTER CHIPS & SIDEBAR NAVIGATION
// ==========================================================================

const filterChips = document.querySelectorAll(".filter-chip");
const sidebarLangItems = document.querySelectorAll(".lang-nav-item");

function applyLanguageFilter(lang) {
    activeLanguageFilter = lang;

    filterChips.forEach(chip => {
        chip.classList.toggle("active", chip.dataset.lang.toLowerCase() === lang.toLowerCase());
    });

    sidebarLangItems.forEach(item => {
        item.classList.toggle("active", item.dataset.lang.toLowerCase() === lang.toLowerCase());
    });

    if (lang === "all") {
        songsSectionTitle.textContent = "Trending Songs & Hits";
    } else {
        songsSectionTitle.textContent = `${lang} Chartbusters & Hits`;
    }

    renderSongCards(getActiveFilteredSongs());
}

filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
        applyLanguageFilter(chip.dataset.lang);
        document.getElementById("trendingSection").scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

sidebarLangItems.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        applyLanguageFilter(item.dataset.lang);
        document.getElementById("trendingSection").scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// Hero Badges click
document.querySelectorAll(".hero-badges .lang-pill").forEach(pill => {
    pill.addEventListener("click", () => {
        applyLanguageFilter(pill.dataset.lang);
        document.getElementById("trendingSection").scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// Regional Spotlight Cards
document.querySelectorAll(".spotlight-card").forEach(card => {
    card.addEventListener("click", () => {
        const lang = card.dataset.lang;
        applyLanguageFilter(lang);
        // Play first song of this language
        const matchIdx = songs.findIndex(s => s.language.toLowerCase() === lang.toLowerCase());
        if (matchIdx !== -1) {
            loadSong(matchIdx);
            playSong();
        }
        document.getElementById("trendingSection").scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// ==========================================================================
// SEARCH ENGINE
// ==========================================================================

searchInput.addEventListener("input", () => {
    const val = searchInput.value.trim();
    clearSearchBtn.style.opacity = val ? "1" : "0";
    renderSongCards(getActiveFilteredSongs());
});

clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearSearchBtn.style.opacity = "0";
    renderSongCards(getActiveFilteredSongs());
    searchInput.focus();
});

resetSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    applyLanguageFilter("all");
});

// ==========================================================================
// POPULAR ARTISTS INTERACTION
// ==========================================================================

document.querySelectorAll(".artist-card").forEach(card => {
    card.addEventListener("click", () => {
        const artistName = card.dataset.artist;
        const songIdx = songs.findIndex(s => s.artist.includes(artistName));
        if (songIdx !== -1) {
            loadSong(songIdx);
            playSong();
            showToast(`Playing artist: ${artistName}`, "fa-microphone");
        } else {
            searchInput.value = artistName;
            renderSongCards(getActiveFilteredSongs());
            document.getElementById("trendingSection").scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ==========================================================================
// HERO BUTTONS
// ==========================================================================

exploreBtn.addEventListener("click", () => {
    document.getElementById("trendingSection").scrollIntoView({ behavior: "smooth", block: "start" });
});

heroRandomBtn.addEventListener("click", () => {
    const randIdx = Math.floor(Math.random() * songs.length);
    loadSong(randIdx);
    playSong();
    showToast(`Surprise Mix: ${songs[randIdx].title} (${songs[randIdx].language})`, "fa-bolt");
});

document.getElementById("seeAllSongs").addEventListener("click", () => {
    applyLanguageFilter("all");
    searchInput.value = "";
    document.getElementById("trendingSection").scrollIntoView({ behavior: "smooth" });
});

// ==========================================================================
// LIKED SONGS & LOCAL STORAGE
// ==========================================================================

function getLikedSongs() {
    try {
        return JSON.parse(localStorage.getItem("beatzoLikedSongs")) || [];
    } catch {
        return [];
    }
}

function saveLikedSongs(list) {
    localStorage.setItem("beatzoLikedSongs", JSON.stringify(list));
    updateLikedCount();
}

function updateLikedCount() {
    const count = getLikedSongs().length;
    if (likedCountBadge) {
        likedCountBadge.textContent = count;
    }
}

function toggleLikeSong(song) {
    const list = getLikedSongs();
    const idx = list.findIndex(item => item.id === song.id || item.title === song.title);
    if (idx === -1) {
        list.push(song);
        showToast(`Saved to Liked Songs`, "fa-heart");
    } else {
        list.splice(idx, 1);
        showToast(`Removed from Liked Songs`, "fa-heart-crack");
    }
    saveLikedSongs(list);
    updateLikeButton();
}

likeBtn.addEventListener("click", () => {
    const song = songs[currentSongIndex];
    toggleLikeSong(song);
    renderSongCards(getActiveFilteredSongs());
});

function updateLikeButton() {
    const song = songs[currentSongIndex];
    const isLiked = getLikedSongs().some(item => item.id === song.id || item.title === song.title);
    const icon = likeBtn.querySelector("i");
    if (isLiked) {
        icon.className = "fa-solid fa-heart";
        likeBtn.classList.add("liked");
    } else {
        icon.className = "fa-regular fa-heart";
        likeBtn.classList.remove("liked");
    }
}

// Recently Played
function saveRecentlyPlayed(song) {
    try {
        let recent = JSON.parse(localStorage.getItem("beatzoRecentSongs")) || [];
        recent = recent.filter(item => item.title !== song.title);
        recent.unshift(song);
        if (recent.length > 15) recent = recent.slice(0, 15);
        localStorage.setItem("beatzoRecentSongs", JSON.stringify(recent));
    } catch (e) {
        // silent
    }
}

// ==========================================================================
// DYNAMIC VIEWS (LIBRARY, LIKED, RECENT, PLAYLISTS)
// ==========================================================================

function showDynamicSection(title, htmlContent) {
    dynamicTitle.textContent = title;
    dynamicContent.innerHTML = htmlContent;
    dynamicSection.classList.add("show");
    dynamicSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

closeDynamic.addEventListener("click", () => {
    dynamicSection.classList.remove("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
});

libraryLink.addEventListener("click", (e) => {
    e.preventDefault();
    let content = "";
    songs.forEach(song => {
        content += `
            <div class="dynamic-song" data-song-id="${song.id}">
                <img src="${song.cover}" alt="${song.title}" class="dynamic-song-img">
                <h3>${song.title}</h3>
                <p>${song.artist} • <strong style="color:var(--primary-light)">${song.language}</strong></p>
            </div>
        `;
    });
    showDynamicSection("Complete Music Library (24 Tracks)", content);
    attachDynamicSongEvents();
});

likedLink.addEventListener("click", (e) => {
    e.preventDefault();
    const liked = getLikedSongs();
    if (liked.length === 0) {
        showDynamicSection("Liked Songs", `
            <div class="empty-message">
                <i class="fa-regular fa-heart"></i>
                <h3>No liked songs yet</h3>
                <p>Click the heart button on any song card to build your private collection.</p>
            </div>
        `);
        return;
    }
    let content = "";
    liked.forEach(song => {
        content += `
            <div class="dynamic-song" data-song-id="${song.id}">
                <img src="${song.cover}" alt="${song.title}" class="dynamic-song-img">
                <h3>${song.title}</h3>
                <p>${song.artist} • <strong style="color:var(--primary-light)">${song.language}</strong></p>
            </div>
        `;
    });
    showDynamicSection(`Liked Songs (${liked.length})`, content);
    attachDynamicSongEvents();
});

recentLink.addEventListener("click", (e) => {
    e.preventDefault();
    const recent = JSON.parse(localStorage.getItem("beatzoRecentSongs")) || [];
    if (recent.length === 0) {
        showDynamicSection("Recently Played", `
            <div class="empty-message">
                <i class="fa-solid fa-clock-rotate-left"></i>
                <h3>No playback history</h3>
                <p>Play tracks on the home page and your stream history will be logged here.</p>
            </div>
        `);
        return;
    }
    let content = "";
    recent.forEach(song => {
        content += `
            <div class="dynamic-song" data-song-id="${song.id}">
                <img src="${song.cover}" alt="${song.title}" class="dynamic-song-img">
                <h3>${song.title}</h3>
                <p>${song.artist} • <strong style="color:var(--primary-light)">${song.language}</strong></p>
            </div>
        `;
    });
    showDynamicSection(`Recently Played (${recent.length})`, content);
    attachDynamicSongEvents();
});

playlistLink.addEventListener("click", (e) => {
    e.preventDefault();
    showDynamicSection("Curated Playlists", `
        <div class="dynamic-song" data-lang="Tamil">
            <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80" class="dynamic-song-img">
            <h3>South Cinema Mega Mix</h3>
            <p>Tamil, Telugu & Malayalam High Energy</p>
        </div>
        <div class="dynamic-song" data-lang="Hindi">
            <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80" class="dynamic-song-img">
            <h3>Bollywood Monsoon Romance</h3>
            <p>Arijit Singh & Pritam Masterpieces</p>
        </div>
        <div class="dynamic-song" data-lang="English">
            <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=80" class="dynamic-song-img">
            <h3>Midnight Synth & Pop</h3>
            <p>Global chart-toppers & neon rhythms</p>
        </div>
    `);
    attachDynamicSongEvents();
});

function attachDynamicSongEvents() {
    document.querySelectorAll(".dynamic-song").forEach(item => {
        item.addEventListener("click", () => {
            const songId = item.dataset.songId;
            const lang = item.dataset.lang;
            if (songId) {
                const idx = songs.findIndex(s => s.id === songId);
                if (idx !== -1) {
                    loadSong(idx);
                    playSong();
                }
            } else if (lang) {
                applyLanguageFilter(lang);
                dynamicSection.classList.remove("show");
            }
        });
    });
}

// ==========================================================================
// TOAST NOTIFICATION UTILITY
// ==========================================================================

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

// Format Seconds -> "MM:SS"
function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    seconds = Math.floor(seconds);
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
}

// Mobile Sidebar
mobileMenu.addEventListener("click", () => {
    sidebar.classList.toggle("mobile-open");
});

document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768 && !sidebar.contains(e.target) && !mobileMenu.contains(e.target)) {
        sidebar.classList.remove("mobile-open");
    }
});

// Upgrade Button
document.getElementById("upgradeBtn").addEventListener("click", () => {
    showToast("Beatzo Hi-Fi active! Enjoy studio 320kbps streams.", "fa-wand-magic-sparkles");
});

// Header Audio Wave Click -> Jump to Player
headerWaveBadge.addEventListener("click", () => {
    togglePlayPause();
});

// Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    if (e.code === "Space") {
        e.preventDefault();
        togglePlayPause();
    } else if (e.code === "ArrowRight") {
        audio.currentTime = Math.min(audio.currentTime + 5, audio.duration || 300);
    } else if (e.code === "ArrowLeft") {
        audio.currentTime = Math.max(audio.currentTime - 5, 0);
    }
});

// ==========================================================================
// INITIAL SETUP
// ==========================================================================

renderSongCards(songs);
updateLikedCount();
loadSong(0); // Preload first track (Naa Ready - Tamil)