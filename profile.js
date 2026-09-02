// =====================================================
// BEATZO PROFILE
// =====================================================

const userData =
    JSON.parse(
        localStorage.getItem("beatzoUser")
    );


// =====================================================
// ELEMENTS
// =====================================================

const profileName =
    document.getElementById("profileName");

const profileEmail =
    document.getElementById("profileEmail");

const infoName =
    document.getElementById("infoName");

const infoEmail =
    document.getElementById("infoEmail");

const avatarLetter =
    document.getElementById("avatarLetter");


// =====================================================
// LOAD USER
// =====================================================

if (userData) {

    const name =
        userData.name || "Beatzo User";

    const email =
        userData.email || "user@beatzo.com";


    profileName.textContent = name;

    profileEmail.textContent = email;

    infoName.textContent = name;

    infoEmail.textContent = email;


    avatarLetter.textContent =
        name.charAt(0).toUpperCase();

}


// =====================================================
// LOGOUT
// =====================================================

const logoutBtn =
    document.getElementById("logoutBtn");


logoutBtn.addEventListener("click", function () {

    localStorage.removeItem(
        "beatzoUser"
    );

    localStorage.removeItem(
        "beatzoLoggedIn"
    );


    window.location.href =
        "login.html";

});


// =====================================================
// EDIT PROFILE
// =====================================================

const editProfile =
    document.getElementById("editProfile");


editProfile.addEventListener("click", function () {

    const newName =
        prompt(
            "Enter your new name:",
            userData?.name || "Beatzo User"
        );


    if (
        newName &&
        newName.trim().length > 0
    ) {

        const updatedUser = {

            name: newName.trim(),

            email:
                userData?.email ||
                "user@beatzo.com"

        };


        localStorage.setItem(
            "beatzoUser",
            JSON.stringify(updatedUser)
        );


        location.reload();

    }

});
