document.querySelector(".video-player").id = "video-player";
document.querySelector(".video-controls").remove();
let id = document.querySelector(".video-player").querySelector("iframe").src.split("/")[4].split("?")[0];
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-player', {
    height: '380',
    width: '',
    videoId: id,
    playerVars: {
      'playsinline': 1
    },
    events: {
    'onReady': main
    }
  });
  player.getIframe().style.width = "100%";
}

function main() {
  let current = 1;
  let captions = Array.from(document.querySelector(".subtitles-menu").children);
  captions.forEach((c, i) => {
    if (i&&i<captions.length-1) {
      c.onclick = () => {
        captions[current].className = "";
        current = i;
        c.className = "current";
        document.querySelector(".subtitles").scrollTo(0, c.offsetTop-200);
        player.seekTo(c.firstChild.getAttribute("data-start")/1000);
      }
    }
  });
  let captionMap = [];
  let mapped = 1;
  for (let t = 0; t < Math.ceil(player.getDuration()); t++) {
    try {
      if (t >= captions[mapped].firstChild.getAttribute("data-start")/1000) {
        captionMap.push(mapped);
        mapped += 1;
      } else if (mapped > 1) {
        captionMap.push(mapped-1);
      } else {
        captionMap.push(1);
      }
    } catch {
      break;
    }
  }
  setInterval(() => {
    captions[current].className = "";
    scroll = captionMap[Math.floor(player.getCurrentTime())] !== current;
    current = captionMap[Math.floor(player.getCurrentTime())];
    console.log(current);
    let c = captions[current];
    c.className = "current";
    if (scroll) {
      document.querySelector(".subtitles").scrollTo(0, c.offsetTop-200);
    }
  }, 500);
}
