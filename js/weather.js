const APIkey = '8bc3087037314bd2ac3190417250404'
const city = 'Valencia Comunidad Valenciana'
const weatherContainer = document.getElementById('weather')

const getCurrentWeather = async (location) => {
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${location}&aqi=yes`)
        if(!response.ok){
            throw new Error('Error en la solicitud', response.status)
        }
        const data = await response.json()
        return data
    }catch (err){
        console.error('Error al obtener datos', err)
    }
}

const getForecast = async (location) => {
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${location}&days=1&aqi=no&alerts=no`)
        if(!response.ok){
            throw new Error('Error en la solicitud', response.status)
        }
        const data = await response.json()
        return data
    }catch (err){
        console.error('Error al obtener datos', err)
    }
}

const currentTemplate = (weather) => {
    return `
        <h3>${weather[0]}/${weather[1]}</h3>
        <p>${weather[2]}</p>
        <div class="currentWeather">
            <img src="${weather[3]}" alt="${weather[2]}">
            <div>
                ${weather[4]}
                <img src="./../img/thermometer.png" alt="celsius" width=25>
            </div>
            <div class="info">
                <p>Precipitation: ${weather[5]}mm</p>
                <p>Humidity: ${weather[6]}%</p>
                <p>Wind: ${weather[7]}km/h ${weather[8]}</p>
            </div>
        </div>
    `
}

const forecastTemplate = (hour) => {
    return `
        <div>
            <p>${hour.time.slice(10)}</p>
            <img src="${hour.condition.icon}" alt="${hour.condition.text}">
            <p>${hour.temp_c} ºC</p>
        </div>
    `
}

/* INIT, updates every hour*/
getWeather()
setInterval(getWeather, 3600000)

function getWeather() {
    getCurrentWeather(city).then((data) => {
        let weatherArray = [
            data.location.name,
            data.location.country,
            data.current.condition.text,
            data.current.condition.icon,
            data.current.temp_c,
            data.current.precip_mm,
            data.current.humidity,
            data.current.wind_kph,
            data.current.wind_dir
        ]
        weatherContainer.innerHTML = currentTemplate(weatherArray)
        getForecast(city).then((data) => {
            let forecast = data.forecast.forecastday[0].hour
            let ans = ''
            for (const hour of forecast) {
                ans += forecastTemplate(hour)
            }
            weatherContainer.innerHTML += `
                <div class="forecast">
                    ${ans}
                </div>
            `
        })
    })
}