//
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  document.querySelector('img').classList.add('hidden')
  const latitude = document.querySelector('#lat').value
  const longitude = document.querySelector('#long').value
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,snowfall_sum&forecast_days=1&timezone=auto`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

