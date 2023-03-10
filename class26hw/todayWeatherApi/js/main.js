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
        console.log(data.daily.sunrise) 
    
        //converts weather code and inserts 
        document.querySelector('h3').innerText = `Today: ${convertWeatherCode(data.daily.weathercode)}`
        //insert sunrise, sunset
        document.querySelector('#sunrise').innerText = `Sunrise : ${timeCutter(data.daily.sunrise)} AM`
        document.querySelector('#sunset').innerText = `Sunset : ${timeCutter(data.daily.sunset)} PM`
        //insert minimum/max temp
        document.querySelector('#mintemp').innerText = `Min Temperature : ${(data.daily.temperature_2m_min)} \u00B0C`
        document.querySelector('#maxtemp').innerText = `Max Temperature : ${(data.daily.temperature_2m_max)} \u00B0C`
        //insert snowfall sum and rain sum
        document.querySelector('#snowsum').innerText = `Snowfall sum : ${data.daily.snowfall_sum[0]} cm`
        document.querySelector('#rainsum').innerText = `Rain sum : ${data.daily.rain_sum[0]} mm`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//converts weather code to their meanings 
function convertWeatherCode(code){
    
  const codei = code[0]

    if (codei == 1 || codei== 2 || codei== 3){
      return "Mainly Clear, partly cloudy, and overcast"
    } else if (codei== 0){
      return 'Clear Sky'
    } else if (codei== 45 || codei==48){
      return 'Fog and depositing rime fog'
    } else if (codei== 51 || codei== 53 || codei==55){
      return 'Drizzle: light, moderate, and dense intensity'
    } else if (codei== 56 || codei== 57){
      return "Freezing Drizzle: Light and dense intensity"
    } else if (codei== 61 || codei==63 || codei==65){
      return "Rain: Slight, moderate and heavy intensity"
    } else if (codei== 66 || codei== 67 ){
      return "Freezing Rain: Light and heavy intensity"
    } else if (codei== 71 || codei== 73 || codei== 75){
      return "Snow fall: Slight, moderate, and heavy intensity"
    } else if (codei== 77){
      return "Snow grains"
    } else if (codei== 80 || codei== 81 || codei== 82){
      return "Rain showers: slight, moderate, and violent"
    } else if (codei== 85 || codei== 86){
      return "Snow showers slight and heavy"
    } else if (codei== 95){
      return "Thunderstorm: Slight or moderate"
    } else if (codei== 96 || codei== 99){
      return "Thunderstorm with slight and heavy hail"
    }
  }
function timeCutter(time){
  return time[0].substring(time[0].length-5)
}