document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'ad244a0c7a463dc0b3babab58240ccab'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
                document.getElementById('weather').textContent = `Weather: ${data.weather[0].description}`;
                document.querySelector('.weather-info').style.display = 'block';
            } else {
                alert('City not found');
            }
        })
        .catch(error => {
            alert('An error occurred. Please try again.');
            console.error(error);
        });
});
