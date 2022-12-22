const getFactBtn = document.getElementById("get-fact-btn");
const ranFactBtn = document.getElementById("ran-fact-btn");
const fact = document.querySelector(".fact");
let url = "http://numbersapi.com/";

let fetchFact = (num) => {
  let finalUrl = url + num;
  fetch(finalUrl)
    .then((resp) => resp.text())
    .then((data) => {
      fact.style.display = "block";
      fact.innerHTML = `<h2>${num}</h2>
      <p>${data}</p>`;
      document.querySelector(".container").append(fact);
    });
};

let getFact = () => {
  let num = Number(document.getElementById("user-inp").value);
  console.log(typeof num);
  if (num) {
    if (num >= 0 && num <= 300) {
      fetchFact(num);
    } else {
      fact.style.display = "block";
      fact.innerHTML = `<p class="msg"> Please enter a number between 0 to 300. </p>`;
    }
  } else {
    fact.style.display = "block";
    fact.innerHTML = `<p class="msg"> The input field cannot be empty. </p>`;
  }
};

let getRandomFact = () => {
  let num = Math.floor(Math.random() * 301);
  fetchFact(num);
};

getFactBtn.addEventListener("click", getFact);
ranFactBtn.addEventListener("click", getRandomFact);
