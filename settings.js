// Get elements
const modal = document.getElementById("settingsModal");
const settingsBtn = document.querySelector(".settings-btn"); // Ensure your Settings text has this class
const closeBtn = document.querySelector(".close-btn");

// 1. Open/Close Logic
document.querySelector("button:contains('Settings')").onclick = () => modal.style.display = "block"; // Generic selector
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

// 2. Change Background
function applyBackground() {
    const url = document.getElementById('bgInput').value;
    document.body.style.backgroundImage = `url('${url}')`;
    document.body.style.backgroundSize = "cover";
    localStorage.setItem('customBG', url);
}

// 3. Tab Cloaking (Changes the title of the browser tab)
function applyTitle() {
    const title = document.getElementById('titleInput').value;
    document.title = title;
    localStorage.setItem('customTitle', title);
}

// 4. Load saved settings on startup
window.onload = () => {
    const savedBG = localStorage.getItem('customBG');
    const savedTitle = localStorage.getItem('customTitle');
    
    if (savedBG) {
        document.body.style.backgroundImage = `url('${savedBG}')`;
        document.body.style.backgroundSize = "cover";
    }
    if (savedTitle) document.title = savedTitle;
};

function resetSettings() {
    localStorage.clear();
    location.reload();
}
