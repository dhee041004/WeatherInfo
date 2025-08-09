async function weatherInfo(event) {
    event.preventDefault()
    let city = document.getElementById('city').value
    let apikey ='537b6ed3746625efd3837d8adb5b4b49'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    try {
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        if(data.cod == '200') 
        {
            document.getElementById('weatherData').innerHTML= 
        `
        <h1>${data.name}</h1>
        <p>${data.main.temp}</p>
        <p>${data.weather[0].description}</p>
        `
        }
        else {
            alert('city not found')
        }
        
    } catch (error) {
        console.error("error while fetching",error)
        alert('error while fetching')
    }
}

