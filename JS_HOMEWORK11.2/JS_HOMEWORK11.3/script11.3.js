function showRandomImage() {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    const imageFlag = "image/" + randomNumber + ".png";
    document.getElementById("randomImage").src = imageFlag;
}
showRandomImage();