// =============================================
// BEATZO MUSIC PLAYER
// =============================================


// =============================================
// LOGIN CHECK
// =============================================

const loggedIn =
    localStorage.getItem("beatzoLoggedIn");

if (loggedIn !== "true") {
    window.location.href = "login.html";
}


// =============================================
// SONG DATA
// =============================================

const songs = [

    {
        title: "Midnight Dreams",
        artist: "Luna"
    },

    {
        title: "Neon Lights",
        artist: "Alex Ray"
    },

    {
        title: "Ocean Waves",
        artist: "Maya"
    },

    {
        title: "Lost In Time",
        artist: "Nova"
    }

];


// =============================================
// PLAYER VARIABLES
// =============================================

let currentSong = 0;

let isPlaying = false;


// =============================================
// GET HTML ELEMENTS
// =============================================

const playBtn =
    document.getElementById("playBtn");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

const currentTitle =
    document.getElementById("currentTitle");

const currentArtist =
    document.getElementById("currentArtist");

const progress =
    document.getElementById("progress");

const volume =
    document.getElementById("volume");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");

const likeBtn =
    document.getElementById("likeBtn");

const searchInput =
    document.getElementById("searchInput");

const songCards =
    document.querySelectorAll(".song-card");


// =============================================
// LOAD SONG
// =============================================

function loadSong(index) {

    currentSong = index;

    const song = songs[index];

    currentTitle.textContent =
        song.title;

    currentArtist.textContent =
        song.artist;

    progress.value = 0;

    currentTime.textContent =
        "0:00";

    duration.textContent =
        "3:45";

    isPlaying = false;

    playBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

    updateLikeButton();

    saveRecentlyPlayed(song);
}


// =============================================
// PLAY SONG
// =============================================

function playSong() {

    isPlaying = true;

    playBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';
}


// =============================================
// PAUSE SONG
// =============================================

function pauseSong() {

    isPlaying = false;

    playBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';
}


// =============================================
// PLAY / PAUSE BUTTON
// =============================================

playBtn.addEventListener(
    "click",
    function () {

        if (
            currentTitle.textContent ===
            "Select a song"
        ) {

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
);


// =============================================
// NEXT SONG
// =============================================

nextBtn.addEventListener(
    "click",
    function () {

        currentSong++;

        if (
            currentSong >=
            songs.length
        ) {

            currentSong = 0;

        }

        loadSong(currentSong);

        playSong();

    }
);


// =============================================
// PREVIOUS SONG
// =============================================

prevBtn.addEventListener(
    "click",
    function () {

        currentSong--;

        if (currentSong < 0) {

            currentSong =
                songs.length - 1;

        }

        loadSong(currentSong);

        playSong();

    }
);


// =============================================
// SONG CARD PLAY BUTTONS
// =============================================

songCards.forEach(
    (card, index) => {

        const button =
            card.querySelector(".card-play");


        button.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                loadSong(index);

                playSong();

            }
        );

    }
);


// =============================================
// SONG CARD CLICK
// =============================================

songCards.forEach(
    (card, index) => {

        card.addEventListener(
            "click",
            function () {

                loadSong(index);

                playSong();

            }
        );

    }
);


// =============================================
// PROGRESS BAR
// =============================================

progress.addEventListener(
    "input",
    function () {

        const value =
            Number(progress.value);

        currentTime.textContent =
            formatTime(value);

    }
);


// =============================================
// FORMAT TIME
// =============================================

function formatTime(seconds) {

    seconds =
        Math.floor(seconds);

    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        seconds % 60;

    return (
        minutes +
        ":" +
        remainingSeconds
            .toString()
            .padStart(2, "0")
    );

}


// =============================================
// VOLUME
// =============================================

volume.addEventListener(
    "input",
    function () {

        console.log(
            "Volume:",
            volume.value + "%"
        );

    }
);


// =============================================
// GET LIKED SONGS
// =============================================

function getLikedSongs() {

    return (
        JSON.parse(
            localStorage.getItem(
                "beatzoLikedSongs"
            )
        ) || []
    );

}


// =============================================
// SAVE LIKED SONGS
// =============================================

function saveLikedSongs(songsList) {

    localStorage.setItem(
        "beatzoLikedSongs",
        JSON.stringify(songsList)
    );

}


// =============================================
// LIKE BUTTON
// =============================================

likeBtn.addEventListener(
    "click",
    function () {

        const likedSongs =
            getLikedSongs();

        const song =
            songs[currentSong];


        const existingIndex =
            likedSongs.findIndex(
                item =>
                    item.title ===
                    song.title
            );


        if (existingIndex === -1) {

            likedSongs.push(song);

        } else {

            likedSongs.splice(
                existingIndex,
                1
            );

        }


        saveLikedSongs(
            likedSongs
        );


        updateLikeButton();

    }
);


// =============================================
// UPDATE LIKE BUTTON
// =============================================

function updateLikeButton() {

    const icon =
        likeBtn.querySelector("i");

    const likedSongs =
        getLikedSongs();

    const song =
        songs[currentSong];


    const isLiked =
        likedSongs.some(
            item =>
                item.title ===
                song.title
        );


    if (isLiked) {

        icon.classList.remove(
            "fa-regular"
        );

        icon.classList.add(
            "fa-solid"
        );

        likeBtn.style.color =
            "#ff6d9a";

    } else {

        icon.classList.remove(
            "fa-solid"
        );

        icon.classList.add(
            "fa-regular"
        );

        likeBtn.style.color =
            "";

    }

}


// =============================================
// RECENTLY PLAYED
// =============================================

function saveRecentlyPlayed(song) {

    let recentSongs =
        JSON.parse(
            localStorage.getItem(
                "beatzoRecentSongs"
            )
        ) || [];


    recentSongs =
        recentSongs.filter(
            item =>
                item.title !==
                song.title
        );


    recentSongs.unshift(song);


    if (recentSongs.length > 10) {

        recentSongs =
            recentSongs.slice(0, 10);

    }


    localStorage.setItem(
        "beatzoRecentSongs",
        JSON.stringify(recentSongs)
    );

}


// =============================================
// SIDEBAR ELEMENTS
// =============================================

const homeLink =
    document.getElementById(
        "homeLink"
    );

const searchLink =
    document.getElementById(
        "searchLink"
    );

const libraryLink =
    document.getElementById(
        "libraryLink"
    );

const likedLink =
    document.getElementById(
        "likedLink"
    );

const recentLink =
    document.getElementById(
        "recentLink"
    );

const playlistLink =
    document.getElementById(
        "playlistLink"
    );


// =============================================
// DYNAMIC SECTION
// =============================================

const dynamicSection =
    document.getElementById(
        "dynamicSection"
    );

const dynamicTitle =
    document.getElementById(
        "dynamicTitle"
    );

const dynamicContent =
    document.getElementById(
        "dynamicContent"
    );

const closeDynamic =
    document.getElementById(
        "closeDynamic"
    );


// =============================================
// ACTIVE NAVIGATION
// =============================================

function removeActive() {

    document
        .querySelectorAll(
            ".sidebar nav a"
        )
        .forEach(
            link => {

                link.classList.remove(
                    "active"
                );

            }
        );

}


// =============================================
// SHOW DYNAMIC SECTION
// =============================================

function showDynamicSection(
    title,
    content
) {

    dynamicTitle.textContent =
        title;

    dynamicContent.innerHTML =
        content;

    dynamicSection.classList.add(
        "show"
    );


    dynamicSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =============================================
// HOME
// =============================================

homeLink.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        removeActive();

        homeLink.classList.add(
            "active"
        );


        dynamicSection.classList.remove(
            "show"
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// =============================================
// SEARCH
// =============================================

searchLink.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        removeActive();

        searchLink.classList.add(
            "active"
        );


        searchInput.focus();


        searchInput.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
);


// =============================================
// SEARCH FUNCTION
// =============================================

searchInput.addEventListener(
    "input",
    function () {

        const searchText =
            searchInput.value
                .toLowerCase()
                .trim();


        let foundSongs = 0;


        songCards.forEach(
            card => {

                const title =
                    card.dataset.title
                        .toLowerCase();

                const artist =
                    card.dataset.artist
                        .toLowerCase();


                if (
                    title.includes(searchText) ||
                    artist.includes(searchText)
                ) {

                    card.style.display =
                        "block";

                    foundSongs++;

                } else {

                    card.style.display =
                        "none";

                }

            }
        );


        const noResults =
            document.getElementById(
                "noResults"
            );


        if (
            searchText !== "" &&
            foundSongs === 0
        ) {

            noResults.style.display =
                "block";

        } else {

            noResults.style.display =
                "none";

        }

    }
);


// =============================================
// LIBRARY
// =============================================

libraryLink.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        removeActive();

        libraryLink.classList.add(
            "active"
        );


        let content = "";


        songs.forEach(
            (song, index) => {

                content += `

                    <div
                        class="dynamic-song"
                        data-index="${index}">

                        <i class="fa-solid fa-music"></i>

                        <h3>
                            ${song.title}
                        </h3>

                        <p>
                            ${song.artist}
                        </p>

                    </div>

                `;

            }
        );


        showDynamicSection(
            "Your Library",
            content
        );


        addDynamicSongEvents();

    }
);


// =============================================
// LIKED SONGS
// =============================================

likedLink.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        removeActive();

        likedLink.classList.add(
            "active"
        );


        const likedSongs =
            getLikedSongs();


        if (
            likedSongs.length === 0
        ) {

            showDynamicSection(
                "Liked Songs",
                `

                    <div class="empty-message">

                        <i
                            class="fa-regular fa-heart">
                        </i>

                        <h3>
                            No liked songs yet
                        </h3>

                        <p>
                            Click the heart button
                            when you find a song
                            you love.
                        </p>

                    </div>

                `
            );

            return;
        }


        let content = "";


        likedSongs.forEach(
            song => {

                const index =
                    songs.findIndex(
                        item =>
                            item.title ===
                            song.title
                    );


                content += `

                    <div
                        class="dynamic-song"
                        data-index="${index}">

                        <i
                            class="fa-solid fa-heart">
                        </i>

                        <h3>
                            ${song.title}
                        </h3>

                        <p>
                            ${song.artist}
                        </p>

                    </div>

                `;

            }
        );


        showDynamicSection(
            "Liked Songs",
            content
        );


        addDynamicSongEvents();

    }
);


// =============================================
// RECENTLY PLAYED
// =============================================

recentLink.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        removeActive();

        recentLink.classList.add(
            "active"
        );


        const recentSongs =
            JSON.parse(
                localStorage.getItem(
                    "beatzoRecentSongs"
                )
            ) || [];


        if (
            recentSongs.length === 0
        ) {

            showDynamicSection(
                "Recently Played",
                `

                    <div class="empty-message">

                        <i
                            class="fa-solid fa-clock-rotate-left">
                        </i>

                        <h3>
                            No recently played songs
                        </h3>

                        <p>
                            Start playing music and
                            your history will appear here.
                        </p>

                    </div>

                `
            );

            return;
        }


        let content = "";


        recentSongs.forEach(
            song => {

                const index =
                    songs.findIndex(
                        item =>
                            item.title ===
                            song.title
                    );


                content += `

                    <div
                        class="dynamic-song"
                        data-index="${index}">

                        <i
                            class="fa-solid fa-clock-rotate-left">
                        </i>

                        <h3>
                            ${song.title}
                        </h3>

                        <p>
                            ${song.artist}
                        </p>

                    </div>

                `;

            }
        );


        showDynamicSection(
            "Recently Played",
            content
        );


        addDynamicSongEvents();

    }
);


// =============================================
// PLAYLISTS
// =============================================

playlistLink.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        removeActive();

        playlistLink.classList.add(
            "active"
        );


        showDynamicSection(
            "Playlists",
            `

                <div class="dynamic-song">

                    <i
                        class="fa-solid fa-heart">
                    </i>

                    <h3>
                        My Favorites
                    </h3>

                    <p>
                        Your favorite music
                    </p>

                </div>


                <div class="dynamic-song">

                    <i
                        class="fa-solid fa-headphones">
                    </i>

                    <h3>
                        Chill Vibes
                    </h3>

                    <p>
                        Relax and enjoy
                    </p>

                </div>


                <div class="dynamic-song">

                    <i
                        class="fa-solid fa-bolt">
                    </i>

                    <h3>
                        Workout Mix
                    </h3>

                    <p>
                        Music for your energy
                    </p>

                </div>

            `
        );

    }
);


// =============================================
// CLOSE DYNAMIC SECTION
// =============================================

closeDynamic.addEventListener(
    "click",
    function () {

        dynamicSection.classList.remove(
            "show"
        );

        removeActive();

        homeLink.classList.add(
            "active"
        );

    }
);


// =============================================
// DYNAMIC SONG EVENTS
// =============================================

function addDynamicSongEvents() {

    document
        .querySelectorAll(
            ".dynamic-song"
        )
        .forEach(
            card => {

                card.addEventListener(
                    "click",
                    function () {

                        const index =
                            Number(
                                this.dataset.index
                            );


                        if (
                            !isNaN(index) &&
                            index >= 0
                        ) {

                            loadSong(index);

                            playSong();

                        }

                    }
                );

            }
        );

}


// =============================================
// EXPLORE BUTTON
// =============================================

const exploreBtn =
    document.getElementById(
        "exploreBtn"
    );


exploreBtn.addEventListener(
    "click",
    function () {

        document
            .getElementById(
                "trendingSection"
            )
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


// =============================================
// SEE ALL SONGS
// =============================================

const seeAllSongs =
    document.getElementById(
        "seeAllSongs"
    );


seeAllSongs.addEventListener(
    "click",
    function () {

        document
            .getElementById(
                "trendingSection"
            )
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


// =============================================
// MOBILE MENU
// =============================================

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


mobileMenu.addEventListener(
    "click",
    function () {

        document
            .querySelector(
                ".sidebar"
            )
            .classList.toggle(
                "mobile-open"
            );

    }
);


// =============================================
// CLOSE MOBILE SIDEBAR
// =============================================

document
    .querySelectorAll(
        ".sidebar nav a"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                function () {

                    if (
                        window.innerWidth <= 700
                    ) {

                        document
                            .querySelector(
                                ".sidebar"
                            )
                            .classList.remove(
                                "mobile-open"
                            );

                    }

                }
            );

        }
    );


// =============================================
// INITIAL STATE
// =============================================

currentTitle.textContent =
    "Select a song";

currentArtist.textContent =
    "Beatzo";

updateLikeButton();