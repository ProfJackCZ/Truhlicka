
/* UPLOAD BUTTON */

const uploadButton = document.getElementById("upload-button");
const fileInput = document.getElementById("fake-input");

uploadButton.addEventListener("click", (event) => {
    document.getElementById("fake-input").click();
});

fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => setImage(event.target.result)
    reader.readAsDataURL(file);
});


/* DROP AREA */

const dropArea = document.getElementById("drop-area");

dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropArea.classList.add("drag-over");
});

dropArea.addEventListener("dragleave", (event) => {
    event.preventDefault();
    dropArea.classList.remove("drag-over");
});

dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    dropArea.classList.remove("drag-over");

    const file = event.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onload = (event) => setImage(event.target.result);
    reader.readAsDataURL(file);
});


function setImage(image) {
    const img = document.getElementById("dropped-image");
    const button = document.getElementById("upload-button");

    if (image) {
        button.classList.add("hidden-except-hover");
        img.src = event.target.result;
        img.style.display = "block";
        return;
    }
}



/* URL ODKAZ */

// const searchParams = new URLSearchParams(window.location.search);
// const uParam = searchParams.get("u");
// console.log(uParam);