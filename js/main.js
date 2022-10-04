//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const choice = document.querySelector('input').value.toLowerCase();
  console.log(choice);

  const url = `https://api.nasa.gov/planetary/apod?api_key=4095ICezqoui27xHw183pD4A22rznBASaJn7Cu9c&date=${choice}`;

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      if (data.media_type === 'video') {
        document.querySelector('iframe').src = data.url;
        document.querySelector('img').classList.add('hidden');
        document.querySelector('iframe').classList.remove('hidden');
      } else {
        document.querySelector('img').src = data.hdurl;
        document.querySelector('iframe').classList.add('hidden');
        document.querySelector('img').classList.remove('hidden');
      }
      document.getElementById('explanation').innerHTML = data.explanation;
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}
