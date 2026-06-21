/* ==========================================
   AS7ASWIN
   script.js - Part 1
========================================== */

// Loader

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {
        loader.style.display = "none";
    }, 1800);
});

// ==========================================
// Custom Cursor
// ==========================================

const cursor = document.getElementById("cursor");

if (cursor) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
}
// ==========================================
// Gaming Mood
// ==========================================

const moods = [

"🎮 Grinding side quests...",

"🏆 Collecting achievements...",

"👾 Fighting the final boss...",

"⚡ Coding something awesome...",

"😴 AFK... probably eating snacks.",

"🚀 Leveling up life.",

"🕹️ Speedrunning another game."

];

const mood = document.getElementById("gameMood");

let moodIndex = 0;

setInterval(() => {

    mood.textContent = moods[moodIndex];

    moodIndex++;

    if(moodIndex >= moods.length){

        moodIndex = 0;

    }

},3000);

// ==========================================
// Scroll Animation
// ==========================================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

// ==========================================
// Funny Console Message
// ==========================================

console.log(

"%c⚡ Welcome to AS7ASWIN!",

"color:yellow;font-size:24px;font-weight:bold;"

);

console.log(

"%cLooking for secret code? Keep exploring 👀",

"color:cyan;font-size:16px;"

);

// ==========================================
// Random Greeting
// ==========================================

const greetings=[

"Welcome back, Player!",

"Mission Accepted!",

"Daily Quest Ready!",

"Inventory Loaded!",

"New Achievement Nearby!"

];

console.log(

greetings[Math.floor(Math.random()*greetings.length)]

);
/* ==========================================
   SEARCH FUNCTION
========================================== */

const searchData = window.searchData || [];

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("searchResults");

function searchWebsite() {

    if (!results) return;

    const keyword = searchInput.value.trim().toLowerCase();

    results.innerHTML = "";

    if (keyword === "") {

        results.innerHTML = `
        <div class="search-card">
            <h3>👀 Nothing to search</h3>
            <p>Try typing something like <b>games</b>, <b>github</b>, or <b>about</b>.</p>
        </div>`;
        return;
    }

    const found = searchData.filter(item =>
        item.title.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword)
    );

    if (found.length === 0) {

        results.innerHTML = `
        <div class="search-card">
            <h3>❌ No Results</h3>
            <p>Nothing matched "<b>${keyword}</b>".</p>
        </div>`;

        return;
    }

    found.forEach(item => {

        results.innerHTML += `
        <div class="search-card">

            <h3>${item.title}</h3>

            <p>${item.description}</p>

            <a href="${item.link}">
                Open →
            </a>

        </div>`;

    });

}

if (searchBtn) {

    searchBtn.addEventListener("click", searchWebsite);

}

if (searchInput) {

    searchInput.addEventListener("keypress", e => {

        if (e.key === "Enter") {

            searchWebsite();

        }

    });

}

/* ==========================================
   ACHIEVEMENT POPUP
========================================== */

const popup = document.getElementById("retroPopup");
const closePopup = document.getElementById("closePopup");

let popupShown = false;

window.addEventListener("scroll", () => {

    if (popupShown) return;

    const scrollPosition =
        window.scrollY + window.innerHeight;

    if (scrollPosition >= document.body.scrollHeight - 200) {

        popup.classList.add("active");

        popupShown = true;

    }

});

if (closePopup) {

    closePopup.addEventListener("click", () => {

        popup.classList.remove("active");

    });

}

/* ==========================================
   RANDOM EASTER EGG
========================================== */

const secrets = [

"🎉 You found a hidden message!",

"👾 Secret unlocked!",

"⚡ Developer mode activated!",

"🕹️ Bonus XP +100!",

"🍕 Pizza restores full HP!"

];

document.addEventListener("keydown", e => {

    if (e.key.toLowerCase() === "g") {

        alert(

            secrets[Math.floor(Math.random() * secrets.length)]

        );

    }

});

/* ==========================================
   SECRET CODE
========================================== */

let code = "";

const secret = "as7";

document.addEventListener("keydown", e => {

    code += e.key.toLowerCase();

    if (code.length > secret.length) {

        code = code.slice(-secret.length);

    }

    if (code === secret) {

        alert("⚡ Welcome, As7Aswin!");

        document.body.style.filter =
            "drop-shadow(0 0 20px #FFD93D)";

        setTimeout(() => {

            document.body.style.filter = "none";

        }, 2500);

    }

});

/* ==========================================
   RANDOM PAGE TITLE
========================================== */

const titles = [

"⚡ AS7ASWIN",

"🎮 Loading XP...",

"🕹️ Gamer Mode",

"👾 Welcome Back",

"🏆 Quest Started"

];

let titleIndex = 0;

setInterval(() => {

    document.title = titles[titleIndex];

    titleIndex++;

    if (titleIndex >= titles.length) {

        titleIndex = 0;

    }

}, 5000);
