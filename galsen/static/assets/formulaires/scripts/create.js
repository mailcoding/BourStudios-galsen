// Cover
let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numOfFiles = document.getElementById("num-of-files"); 

function preview() {
    imageContainer.innerHTML = "";
    numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

    for (let i of fileInput.files) {
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload = () => {
            let img = document.createElement("img");
            img.setAttribute("src", reader.result);
            figure.insertBefore(img, figCap);
        }
        imageContainer.appendChild(figure);
        reader.readAsDataURL(i);
    }
}

// Fonction pour prévisualiser les vidéos
function previewVideo() {
    let videoInput = document.getElementById("video-input"); // Modifié ici
    let videoContainer = document.getElementById("videos");
    let numOfVideos = document.getElementById("num-of-videos");

    videoContainer.innerHTML = "";
    numOfVideos.textContent = `${videoInput.files.length} Vidéos sélectionnées`;

    for (let videoFile of videoInput.files) {
        let videoReader = new FileReader();
        let videoFigure = document.createElement("figure");
        let videoCaption = document.createElement("figcaption");
        videoCaption.innerText = videoFile.name;
        videoFigure.appendChild(videoCaption);

        // Ajout de la balise video
        let videoElement = document.createElement("video");
        videoElement.setAttribute("controls", ""); // Ajout des contrôles vidéo
        videoFigure.appendChild(videoElement);

        videoReader.onload = () => {
            // Ajout de la source de la vidéo
            let videoSource = document.createElement("source");
            videoSource.setAttribute("src", videoReader.result);
            videoSource.setAttribute("type", videoFile.type);
            videoElement.appendChild(videoSource);
        }

        videoContainer.appendChild(videoFigure);
        videoReader.readAsDataURL(videoFile);
    }
}


