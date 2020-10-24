const video = document.getElementById("video")

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play()
        }
    } catch (eror) {
        console.warn("whoops eror", eror)
    }

}
selectMediaStream()