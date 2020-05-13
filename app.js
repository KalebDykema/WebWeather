// Init storage
const storage = new Storage;
// Get storage data
const weatherLocation = storage.getLocationData();
// Init weather
const weather = new Weather(weatherLocation);
// Init UI
const ui = new UI;

// Verifies if city is valid
var cityValid;

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Keeps the focus on the input text-field
document.addEventListener('mousedown', focusOnInput);
document.onkeydown = e => {
    focusOnInput(e);
}

// Change location on Save Changes
document.onkeydown = e => {
    if(e.key === 'Enter'){
        const UIcity = ui.city;
        const city = UIcity.value;

        // Change location
        weather.changeLocation(city);
        
        // Get and display weather
        getWeather();
        
        // Set location in storage
        setTimeout(() => {
            if(cityValid === true) {
                console.log(cityValid, 'City is valid');
                storage.setLocationData(city);
            } else {
                UIcity.value = '';
            }
        }, 200);
    }
}

// Gets the weather
function getWeather() {
    weather.getWeather()
        .then(res => {
            if(res.cod === "404") {
                cityValid = false;
                ui.showAlert('> city not found', 'alert alert-danger');
            } else {
                cityValid = true;
                ui.paint(res);
            }
        })
        .catch(err => console.log(err));
}

// Focuses on the input
function focusOnInput(e) {
    e.preventDefault();
    ui.city.focus();
}