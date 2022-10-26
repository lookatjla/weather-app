// Constants and variables
const API_KEY = '64e1131bac7cd61b8b315af2eb59ee2c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'
// Cached Element References

// Event listeners

// Functions
$(document).ready(function () {
    $('Search').click(function () {

    });
});
// q={city name}&appid={API key}

function handleGetData() {
    $.ajax(BASE_URL + 'q=Atlanta&appid=' + API_KEY)
        .then(function (data) {
            console.log('Data: ', data);
        }, function (error) {
            console.log('Error: ', error);
        })
}