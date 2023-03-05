// Grab YT Plugin
const yt_dl = require("youtube-dl-exec");

// Grab YT Video Title
const title_block = document.getElementById("title");

// Should be a DIV
if (title_block && title_block instanceof HTMLDivElement) {
    
    // Look for H1
    for (const element of title_block.children) {

        // Skip non headers
        if (!(element instanceof HTMLHeadingElement))
            continue;

        // Create Button Element
        const dl_btn = document.createElement("button");

        // Set Style
        dl_btn.setAttribute("style", "margin-left: auto;");

        // Inner Text
        dl_btn.innerHTML = "Download";

        // OnClick Handler
        dl_btn.onclick = () => {
            yt_dl.exec(window.location.href).then((video) => {

            }).catch((err) => {
                
            });
        }

        // Clean Up
        element.appendChild(dl_btn);
        break;
    }
}