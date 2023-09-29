const fs = require("fs");
const ytdl = require("ytdl-core");

async function downloadVideos(urls) {
  for (const url of urls) {
    try {
      const info = await ytdl.getInfo(url);
      const title = info.videoDetails.title.replace(/[^\w\s]/gi, "_"); // Remove special characters and replace them with underscores.
      const output = `./komono/${title}.mp3`;

      await new Promise((resolve, reject) => {
        ytdl(url, { filter: "audioonly", quality: "highestaudio" })
          .pipe(fs.createWriteStream(output))
          .on("finish", () => {
            console.log(`Audio download completed: ${title}`);
            resolve();
          })
          .on("error", (error) => {
            console.error(`Error downloading: ${title}`, error);
            reject(error);
          });
      });
    } catch (error) {
      console.error(`Error processing URL: ${url}`, error);
    }
  }
}

const anim_03 = [
  "m4ULNs8B1LQ",
  "P2agkX7ZhbE",
  "JbSqS4FDbAY",
  "geANHrbe6Ms",
  "sd4VsbM4fOo",
  "iGS0Xaom5_w",
  "Gu77Vtja30c",
  "MO5sB56rfzA",
  "WrfPvuNUBg8",
  "9014vq1lqXM",
  "IRImIezjxRg",
  "WQt1RRW_xv0",
  "WySzEXKUSZw",
  "pEqnXNsAFL8",
  "Yr-mO1o1uHk",
  "8sFy96-Z8nI",
  "lf1ybF39jSI",
  "AhmTLOA8tZY",
  "WDEchvS4wZY",
  "nVxBzIIT5kg",
  "sTPRjI_zWT8",
  "_EVlNhmTEPI",
  "U3NoDEu7kpg",
  "bzoo7z7aZNM",
  "lk5LhR2LzNI",
  "dVVZaZ8yO6o",
  "yZAY-78zhmw",
  "cLomnZIvoFs",
  "dziBlOinqrM",
  "7x530xSkAdk",
  "VWcytOSDodE",
  "eRMkmFRlnoY",
  "oiG2WeTPLiE",
  "lN4TxOd9I8Q",
  "G8Y95f00D2o",
  "DVk5VuY9lVM",
  "P6xMfRi8KcA",
  "TOAsc-y_yMA",
  "lHW9rt_lowU",
  "oV5ca1eKJyw",
  "5lVOzOBcrm0",
  "CPgPxGX6nNo",
  "oH6mw2Rc3DQ",
  "L7q6DppOmHs",
  "wrRjuMgzmFg",
  "jH4Teb5Rvzg",
  "g4XMe9RD2M8",
  "pqOn2nj7Fp8",
  "19HBjEdX7q0",
  "tXCmUEpyw8A",
  "EVBoxpozOUo",
  "laZusNy8QiY",
  "DZ47H84Bc_Q",
  "tqlyjClQ4Kc",
  "snYP49EAIWg",
  "SxU5hNkYf1Q",
  "CzYHLyhqukI",
  "l_3DOuhZA74",
  "ppPu17iWpKE",
  "AMZUkRgRlBA",
  "Y_UcrYWlB7g",
  "9MQOlv_Oyzs",
  "dT_rgD29w0s",
  "2hqStgAJ1Io",
  "VkniCrXv2OI",
  "dsW8U6E2x9o",
  "QUN9XQKC6qI",
  "NBPuxS7po90",
  "3Lr5gaHGsO4",
  "-B43gs7maws",
  "oy52PyxuunY",
  "egsRCZ_NGnE",
  "8V7HNkeYpgk",
  "7wenFaOrAFQ",
  "yt_mBgpcojw",
  "8FGBi-h632c",
  "ZCasDIsu-SI",
  "f1cDbdojXeM",
  "SPTRzeQI8hE",
  "BiHUIbsI5Ik",
  "8N768T-5Ujs",
  "c4COfl8DMB8",
  "zSxloVuaAoQ",
  "nmsY7p1W31k",
  "7v8zxoEoA_Q",
  "YyknBTm_YyM",
  "bBsKplb2E6Q",
  "6fRsreqo8tA",
  "YkE3NNslE6c",
  "1b0Hy8klPak",
];

const anim_02 = [
  "vAVrRvaVYfA",
  "e6WtKv7HgJ0",
  "QWy9Dk0mZZA",
  "3s-vzKb_aIc",
  "YtwugYGk-3E",
  "uyOKsrSWhK8",
  "fClTNQHnj08",
  "7EbmNz0GC2A",
  "Dq0VWAnSxD0",
  "CZVn-__o8f8",
  "1sPffa739rQ",
  "xDbIDKel-O4",
  "vMS4rMJpYo4",
  "6JgUZXQOy8Q",
  "yjedrBOrzSo",
  "4eFU7yW6gP8",
  "lQmIRe5swro",
  "KtlNDADUS-k",
  "gnqOuX_DpA4",
  "bcTk-xyIkug",
  "gEqU6E1wX4M",
  "GSN92Xcf8uQ",
  "c6fJFG39etE",
  "MmKSTxzcRwg",
  "N5CkMOIwqQ4",
  "G1Qz-M3rnwY",
  "hTKUUwE-Mik",
  "rEDshRd4Cb0",
  "ozp0LBUFq24",
  "Q1XLqo-qAI8",
  "LOUf8Z0RQic",
  "VhinPd5RRJw",
  "eKFN-aqPJH8",
  "ulsLI029rH0",
  "u44jORNkM3g",
  "m7iHmuco_zo",
  "alQKTQdEE-0",
  "WOb8-C6jw0M",
  "jKw6n0PnTMY",
  "_jWVKYjy7E8",
  "kkG-KT_Comw",
  "tBj2GL_12R4",
  "TadDI-Q3lWI",
  "L2Yz1MVQ_Zk",
  "7ieYuiojRN8",
  "93lrosBEW-Q",
  "urxk4mveLCw",
  "8EW03GCm74M",
  "57JW9l7NpOw",
  "AgH3Tw-EYrU",
  "Jfb4O-qmq2c",
  "QY_W_taKkXM",
  "BaOfBQ5uw6M",
  "G0CgVGrn-AU",
  "vH9du8eyrE0",
  "MEc1OTFaWnI",
  "7TuRSG4fM3Y",
  "LaLz2HJvBRs",
];

const videoURLs = ["twdNHG3NKQU"];

const bambooGunURLs = [
  "82aGfIwOHRw",
  "Oxg3Ti58yrI",
  "4hVuKDWl-54",
  "hR2mxJQaiO8",
  "L0NjeeF0kLM",
  "bjxc7nNhBWc",
  "18DqrubhOKk",
  "HwxeLrWymrI",
  "ySuT6WGdUYc",
  "kPigK2huBzk",
  "hcS-DAvsgyk",
];

const komonoURLs = [
  "e1dNnpcek8w",
  "N3CALZudhkI",
  "QzsdL9A8qOk",
  "hrkWfqr1gmo",
  "blnGyX4CSqM",
];

//KQVajqoTGMA

downloadVideos(komonoURLs).then(() => console.log("All downloads completed."));
