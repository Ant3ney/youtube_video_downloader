const fs = require("fs");
const ytdl = require("ytdl-core");

const videoURL = "https://www.youtube.com/watch?v=X3jw1JVNdPE";
const output = "output.mp3";

ytdl(videoURL, { filter: "audioonly", quality: "highestaudio" })
  .pipe(fs.createWriteStream(output))
  .on("finish", () => {
    console.log("Audio download completed!");
  });
