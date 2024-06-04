// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.getElementById('input-box');


searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});


function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}


function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://wallpapers.com/images/featured/clear-sky-0ke2itg1dzw1rcj0.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('https://images.saymedia-content.com/.image/t_share/MjAzMTg3NTAwMTI5MTk5Njgz/cloud-types-with-pictures.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('https://cff2.earth.com/uploads/2018/11/13015448/what-is-haze-960x640.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?b=1&s=612x612&w=0&k=20&c=NqRbz72ha40NZ0TiMzc4cLE2T0frsRsf-AlSOOLgwZ8=')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1547754980-3df97fed72a8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNub3d8ZW58MHx8MHx8fDA%3D')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/03/26/19/12/360_F_326191234_Q12utSZ0vmxV6tKQXogktU7e3dmZ2JLI.jpg')";
        
    } 
}

function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}