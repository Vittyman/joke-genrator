const xhr = new XMLHttpRequest();
document.querySelector("#joke-btn").addEventListener("click", function () {
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);

      const div = document.querySelector("#joke");
      div.innerHTML = data.value;
    }
  };
  xhr.send();
});
