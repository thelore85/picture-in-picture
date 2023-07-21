
// variable set
const videoElement = document.getElementById('video');
const buttonShow = document.getElementById('pip-show');
const buttonSelect = document.getElementById('pip-select');


// Prompt to select media stream, pass to vide element, then play


async function selectMediaStream(){
  try{
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  }catch(error){
    //catch error here
    console.log('error on selectMedia Stream:', error)
  }

}


const newFun = async () => {
  //disable buttonShow
  buttonShow.disabled=true;
  //start pip
  await videoElement.requestPictureInPicture();
  // reset buttonShow
  buttonShow.disabled = false;
}


buttonSelect.addEventListener('click', selectMediaStream)
buttonShow.addEventListener('click', newFun)

//on page load

