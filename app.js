let btn = document.querySelector("#submit");

btn.addEventListener('click', function() {
	sendApiReq();
	btn.disabled = true;
	btn.textContent = "Only one image per day :(";
	btn.classList.add('redText')
})

/*
async function sendApiReq() {
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data)
}
*/

function sendApiReq() {
  fetch(`http://localhost:3000/config`)
  .then(response => response.json())
  .then(data => {
      fetch(`${data.URL}`)
        .then(res => res.json())
        .then(info => {
          console.log(info);
          useApiData(info);
    })
  })
}

function useApiData(data) {
  document.querySelector('#info').innerHTML += `<img alt="img" src="${data.url}"><br>`;
  document.querySelector('#info').innerHTML += data.title;
  document.querySelector('#explanation').innerHTML += data.explanation;

}
