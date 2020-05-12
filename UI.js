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
    }

    // Displays info in the UI
    paint(weather) {
        this.location.textContent =  weather.name;
        this.desc.textContent =  weather.weather[0].description;
        this.string.innerHTML = `${weather.main.temp} F&deg;`;
        this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.wind.textContent = `Wind: ${weather.wind.speed} MPH`;
    }

    // Show alert in UI
    showAlert(msg, classList) {
        // Remove any existing alerts
        this.clearAlert();

        // Create a div
        const div = document.createElement('div');
        // Add classes
        div.className = classList;
        // Add text
        div.appendChild(document.createTextNode(msg));

        // Get parent
        const parent = document.querySelector('.col-md-6');
        // Get col
        const child = document.getElementById('w-location');

        // Insert alert
        parent.insertBefore(div, child);
        // Delete after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear alert in UI
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }
}