function extractText() {
  const fileInput = document.getElementById("image-input");
  const outputArea = document.getElementById("output-box");
  const imageFile = fileInput.files[0];
  if (!imageFile) {
    outputArea.textContent = "Please Select a Image";
    return;
  }
  Tesseract.recognize(imageFile, "eng")
    .then(({ data }) => {
      outputArea.textContent = data.text;
    })
    .catch((error) => {
      console.error("error baba", error);
      outputArea.textContent = "error baba";
    });
  // bangla korte chaile eng er jaigai ben likhte hobe
}
