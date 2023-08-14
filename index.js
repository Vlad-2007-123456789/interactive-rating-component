let form = document.querySelector("form");
let votingSection = document.querySelector(".voting-data");
let resultSection = document.querySelector(".result-data");
let output = document.querySelector("output");
let pageStatus = "voting";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let number = document.querySelector("input[name='rating']:checked").value;
  output.value = number;
  if (pageStatus === "voting") {
    votingSection.ariaHidden = "true";
    resultSection.ariaHidden = "false";
    pageStatus = "result";
  }
});
