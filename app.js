let btn = document.querySelector("#submit");

btn.addEventListener('click', function() {
	sendApiReq();
	btn.disabled = true;
	btn.textContent = "Only one image per day :(";
	btn.classList.add('redText')
})


async function sendApiReq() {
  let API_KEY = 'RRkXY9fc134i4zTg1S9UzzkN9LTg3qdQnKBtB2Oi'
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data)
}

function useApiData(data) {
  document.querySelector('#info').innerHTML += `<img alt="img" src="${data.url}"><br>`;
  document.querySelector('#info').innerHTML += data.title;

}
