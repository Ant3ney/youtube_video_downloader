const allVids = document.querySelectorAll(
  ".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer"
);
const allIDs = [];
for (let i = 0; i < allVids.length; i++) {
  console.log(allVids.length);
  const vid = allVids[i];
  const id = vid.href.split("&list=")[0].split("v=")[1];
  allIDs.push(id);
}

console.log(allIDs);
