document.addEventListener('DOMContentLoaded', () => {
    const launchBtn = document.getElementById('launch-btn');
    const urlInput = document.getElementById('url-input');
    const shortcuts = document.querySelectorAll('.shortcut-btn');

    // Function to launch the cloak
    function launchProxy(url) {
        if (!url) return alert("Please enter a URL");
        
        // Ensure URL has http/https
        let targetUrl = url;
        if (!targetUrl.startsWith('http')) {
            targetUrl = 'https://' + targetUrl;
        }

        const win = window.open('about:blank', '_blank');
        if (!win) {
            alert("Popup blocked! Please allow popups for Prexton to work.");
            return;
        }

        const doc = win.document;
        doc.title = "Google Drive"; // Fake title for cloaking
        
        const iframe = doc.createElement('iframe');
        const style = iframe.style;

        // Make iframe full screen
        style.position = "fixed";
        style.top = "0";
        style.left = "0";
        style.bottom = "0";
        style.right = "0";
        style.width = "100%";
        style.height = "100%";
        style.border = "none";
        style.margin = "0";
        style.padding = "0";
        style.overflow = "hidden";
        style.backgroundColor = "#020617";

        iframe.src = targetUrl;
        doc.body.appendChild(iframe);
        doc.body.style.margin = "0";
    }

    // Event Listener for Launch Button
    launchBtn.addEventListener('click', () => {
        launchProxy(urlInput.value);
    });

    // Event Listener for Enter Key
    urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') launchProxy(urlInput.value);
    });

    // Event Listeners for Shortcut Buttons
    shortcuts.forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.getAttribute('data-url');
            launchProxy(url);
        });
    });
});
