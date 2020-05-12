class Weather {
    constructor(city) {
        this.apiKey = 'a59f704423b53a2b05d8a83674148650';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=imperial`);

        const respData = await resp.json();

        return respData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}