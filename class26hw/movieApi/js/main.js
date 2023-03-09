//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', clearField)
document.querySelector('button').addEventListener('click', getFetch)

function clearField(){
  document.querySelector('#plot').innerText = 'Plot: '
  document.querySelector('#title').innerText = 'Title: '
  document.querySelector('#releaseDate').innerText = 'Release Date: '
  document.querySelector('#runtime').innerText = 'Runtime: '
  document.querySelector('#genre').innerText = 'Genre: '
  document.querySelector('#director').innerText = 'Director: '
  document.querySelector('#actors').innerText = 'Actors: '
  document.querySelector('#language').innerText = 'Language: '
}

function getFetch(){

  const choice = document.querySelector('input').value
  const url = `http://www.omdbapi.com/?apikey=d8da2ad9&t=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.Poster
        document.querySelector('#title').innerText += ` ${data.Title}`
        document.querySelector('#releaseDate').innerText += ` ${data.Released}`
        document.querySelector('#runtime').innerText += ` ${data.Runtime}`
        document.querySelector('#genre').innerText += ` ${data.Genre}`
        document.querySelector('#director').innerText += ` ${data.Director}`
        document.querySelector('#actors').innerText += ` ${data.Actors}`
        document.querySelector('#language').innerText += ` ${data.Language}`
        document.querySelector('#plot').innerText += ` ${data.Plot}`
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

