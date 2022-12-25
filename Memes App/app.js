const meme = document.getElementById("meme");
const title = document.getElementById("title");
const getMemeBtn = document.getElementById("get-meme-btn");

let url = " https://meme-api.com/gimme/";
//Array of subreddits of your choice
let subreddits = ["memes", "wholesomemes", "dankmemes", "me_irl"];

let getMeme = () => {
  let randomSubreddit =
    subreddits[Math.floor(Math.random() * subreddits.length)];

  fetch(url + randomSubreddit)
    .then((resp) => resp.json())
    .then((data) => {
      let memeImg = new Image();
      //Display meme image and title only after the image loads
      memeImg.onload = () => {
        meme.src = data.url;
        title.innerHTML = data.title;
      };
      memeImg.src = data.url;
    });
};

getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("click", getMeme);
