class UI{
    constructor() {
        // Header
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');

        // Details
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');

        // Input
        this.city = document.getElementById('city');

        // Alert
        this.alert = document.getElementById('alert');
    }

    // Display info in the UI
    paint(weather) {
        this.location.textContent =  weather.name;
        this.desc.textContent =  weather.weather[0].description;
        this.string.innerHTML = `${weather.main.temp} F&deg;`;
        this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.wind.textContent = `Wind: ${weather.wind.speed} MPH`;
        this.city.value = '';
    }

    // Show alert in UI
    showAlert(msg) {
        // Remove any existing alerts
        this.clearAlert();

        // Add classes
        this.alert.classList.add('alert');
        // Add text
        this.alert.textContent = msg;

        // Delete after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear alert in UI
    clearAlert(){
        if(this.alert != '.'){
            this.alert.classList.remove('alert');
            this.alert.textContent = '.';
        }
    }
}