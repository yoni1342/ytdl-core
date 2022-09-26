const form = document.querySelector("form");
const url = document.querySelector("input");
var videos = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var videoUrl = url.value;
  console.log(videoUrl);
  var video = document.createElement("video");
  video.src = "/view?url=" + videoUrl;
  video.controls = true;
  video.playsInline = true;
  document.body.appendChild(video);
  videos.push(video);
});
setInterval(() => fetch(""), 5000);
