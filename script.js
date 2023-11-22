const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt the User to select a media stream, pass that to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch the Error Here
    console.log(error);
  }
}

button.addEventListener("click", async () => {
  // Disable the button
  button.disabled = true;

  // Start Picture in Picture
  await videoElement.requestPictureInPicture();

  // Reset the button
  button.disabled = false;
});

// OnLoad
selectMediaStream();
