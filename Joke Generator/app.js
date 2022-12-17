const button = document.getElementById("btn");
const joke = document.getElementById("joke");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

async function getJoke() {
  await fetch(url)
    .then((data) => data.json())
    .then((item) => {
      joke.textContent = `${item["joke"]}`;
      console.log("it", item["joke"], item);
    })
    .catch((error) => console.log("error is", error));
}
// getJoke();
button.addEventListener("click", getJoke);
