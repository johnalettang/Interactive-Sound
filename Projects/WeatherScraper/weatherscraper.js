const maxApi = require("max-api");
maxApi.outlet("whatchu thinkin?");

const weather = require('openweather-apis');
weather.setAPPID("fa244611afd6453d1c0cadac5c3429ab");
weather.setLang('en');
weather.setUnits('imperial');

maxApi.addHandler("denver", () => {
    weather.setCity('denver');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("philadelphia", () => {
    weather.setCity('philadelphia');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});